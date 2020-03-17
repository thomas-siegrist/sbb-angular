import { basename, fragment, join, Path, relative, strings } from '@angular-devkit/core';
import {
  apply,
  chain,
  DirEntry,
  FileEntry,
  forEach,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';
import { findNodes } from '@schematics/angular/utility/ast-utils';
import { createSourceFile, ImportDeclaration, ScriptTarget, SyntaxKind } from 'typescript';

export function bazel(): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const srcDir = tree.getDir('src');
    return chain(
      srcDir.subdirs
        .filter(d => !d.startsWith('showcase'))
        .map(d => srcDir.dir(d))
        .map(projectDir => {
          const ngModules = findNgModules(projectDir);
          return ngModules.map(m => ngModule(m)).concat(ngPackage(projectDir, ngModules));
        })
        .reduce((current, next) => current.concat(next), [] as Rule[])
    );

    function findNgModules(dir: DirEntry): DirEntry[] {
      const directories = dir.subdirs.map(d => dir.dir(d));
      const modules = directories.filter(d => d.subfiles.includes(fragment('public-api.ts')));
      return directories
        .map(d => findNgModules(d))
        .reduce((current, next) => current.concat(next), modules);
    }

    function ngModule(dir: DirEntry) {
      const dependencies = aggregateModuleImports(dir);
      const testDependencies = aggregateModuleImports(dir, false).filter(
        i => !dependencies.includes(i)
      );

      return mergeWith(
        apply(url('./files/ngModule'), [
          template({
            name: basename(dir.path),
            // tslint:disable-next-line: no-non-null-assertion
            packageName: basename(dir.parent!.path),
            hasMarkdown: moduleHasMarkdown(dir),
            dependencies,
            testDependencies,
            hasTests: moduleHasTests(dir),
            ...findStylesheets(dir)
          }),
          move(dir.path),
          overwriteIfExists()
        ])
      );
    }

    function aggregateModuleImports(dir: DirEntry, excludeTests = true) {
      const imports: string[] = [];
      dir.visit((path, entry) => {
        if (path.endsWith('.ts') && (!excludeTests || !path.endsWith('.spec.ts')) && entry) {
          for (const importPath of findImports(path, entry).map(convertToDependency)) {
            if (importPath && !imports.includes(importPath)) {
              imports.push(importPath);
            }
          }
        }
      });
      return imports.sort();
    }

    function findImports(path: Path, entry: Readonly<FileEntry>) {
      const file = createSourceFile(
        basename(path),
        entry.content.toString(),
        ScriptTarget.ESNext,
        true
      );
      return findNodes(
        file,
        SyntaxKind.ImportDeclaration,
        undefined,
        true
      ).map((n: ImportDeclaration) => n.moduleSpecifier.getText().replace(/['"]/g, ''));
    }

    function convertToDependency(importPath: string) {
      if (importPath.startsWith('@sbb-esta/')) {
        return importPath.replace('@sbb-esta/angular-', '//src/');
      } else if (importPath.startsWith('.')) {
        return '';
      } else {
        const index = importPath.startsWith('@') ? 2 : 1;
        return `@npm//${importPath.split('/', index).join('/')}`
      }
    }

    function findStylesheets(dir: DirEntry) {
      const stylesheets: string[] = [];
      const sassBinaries: Array<{ name: string; path: string; dependencies: string[] }> = [];
      let hasSassLibrary = false;
      dir.visit((path, entry) => {
        if (!path.endsWith('.scss') || !entry) {
          return;
        } else if (basename(path).startsWith('_')) {
          hasSassLibrary = true;
        } else {
          const stylesheetPath = relative(dir.path, path);
          stylesheets.push(stylesheetPath.replace('.scss', '.css'));
          sassBinaries.push({
            name: stylesheetPath.replace(/[^a-z0-9]/g, '_'),
            path: stylesheetPath,
            dependencies: findStylesheetDependencies(dir, entry)
          });
        }
      });

      return { stylesheets, sassBinaries, hasSassLibrary };
    }

    function findStylesheetDependencies(dir: DirEntry, entry: Readonly<FileEntry>) {
      const matches = entry.content.toString().match(/@import '([^']+)';/g);
      if (!matches) {
        return [];
      }
      return matches
        .map(s => s.substring(9, s.length - 2))
        .map(i => {
          if (i.includes('/core/styles/common')) {
            return '//src/core/styles:common_scss_lib';
          } else if (isInModule(join(entry.path, i), dir.path)) {
            return `//${dir.path}:${basename(dir.path)}_scss_lib`;
          } else {
            context.logger.warn(`${entry.path}: Could not resolve stylesheet import '${i}'`);
            return '';
          }
        })
        .filter(d => !!d);
    }

    function isInModule(path: Path, modulePath: Path): boolean {
      return !relative(modulePath, path).startsWith('..');
    }

    function moduleHasTests(dir: DirEntry) {
      let hasTests = false;
      dir.visit(path => {
        if (path.endsWith('.spec.ts')) {
          hasTests = true;
        }
      });
      return hasTests;
    }

    function ngPackage(dir: DirEntry, ngModules: DirEntry[]) {
      const resolvePath = (m: DirEntry) => relative(dir.path, m.path);
      return mergeWith(
        apply(url('./files/ngPackage'), [
          template({
            ...strings,
            uc: (s: string) => s.toUpperCase(),
            name: basename(dir.path),
            entryPoints: ngModules.map(resolvePath),
            hasTypography: dir.subfiles.includes(fragment('typography.scss')),
            hasStyles: dir.subfiles.includes(fragment('_styles.scss')),
            hasSchematics: dir.subdirs.includes(fragment('schematics')),
            markdownFiles: dir.subfiles.filter(f => f.endsWith('.md')),
            markdownModules: ngModules.filter(m => moduleHasMarkdown(m)).map(resolvePath)
          }),
          move(dir.path),
          overwriteIfExists()
        ])
      );
    }

    function moduleHasMarkdown(dir: DirEntry) {
      return dir.subfiles.includes(fragment(`${basename(dir.path)}.md`));
    }

    function overwriteIfExists(): Rule {
      return forEach(fileEntry => {
        if (tree.exists(fileEntry.path)) {
          tree.overwrite(fileEntry.path, fileEntry.content);
          return null;
        }
        return fileEntry;
      });
    }
  };
}