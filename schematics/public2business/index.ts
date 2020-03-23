import { join, Path, relative } from '@angular-devkit/core';
import { FileEntry, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function public2business(_options: any): Rule {
  return async (tree: Tree, _context: SchematicContext) => {
    [
      'accordion',
      'autocomplete',
      'badge',
      'datepicker',
      'dropdown',
      'field',
      'input',
      'option',
      'pagination',
      'radio-button',
      'select',
      'tabs',
      'textarea',
      'textexpand',
      'time-input',
      'usermenu'
    ].forEach(m => copyAndAdaptPublicModule(tree, m));
  };
}

function copyAndAdaptPublicModule(tree: Tree, moduleName: string) {
  const publicDir = tree.getDir(`projects/sbb-esta/angular-public/${moduleName}`);
  const businessDir = tree.getDir(`projects/sbb-esta/angular-business/${moduleName}`);
  if (tree.exists(businessDir.path)) {
    businessDir.visit(path => tree.delete(path));
  }
  publicDir.visit((path, entry) => {
    if (entry && !path.endsWith('.spec.ts')) {
      const targetPath = join(businessDir.path, relative(publicDir.path, path));
      const content = adaptFile(entry);

      if (!isPublicTemplateFileWhichHasBusinessTemplate(tree, path)) {
        if (tree.exists(targetPath)) {
          tree.overwrite(targetPath, content);
        } else {
          tree.create(targetPath, content);
        }
      }

      if (targetPath.endsWith('.business.html')) {
        renameBusinessTemplate(tree, targetPath);
      }
    }
  });
  const warningFile = join(businessDir.path, 'AUTOGENERATED_DO_NOT_MODIFY');
  if (!tree.exists(warningFile)) {
    tree.create(warningFile, 'See schematics/public2business');
  }
}

function isPublicTemplateFileWhichHasBusinessTemplate(tree: Tree, path: Path) {
  return path.endsWith('component.html') && tree.exists(path.replace('.html', '.business.html'));
}

function renameBusinessTemplate(tree: Tree, targetPath: Path) {
  const templateFile = targetPath.replace('.business.html', '.html');
  if (tree.exists(templateFile)) {
    tree.delete(templateFile);
  }
  tree.rename(targetPath, templateFile);
}

function adaptFile(entry: Readonly<FileEntry>) {
  const autogenerated = '/** Autogenerated by public2business schematic. DO NOT CHANGE! */\n';
  const content = entry.content.toString('utf8');
  if (['md', 'json', 'html'].some(e => entry.path.endsWith(`.${e}`))) {
    return content;
  } else if (entry.path.endsWith('.scss')) {
    return `${autogenerated}$sbbBusiness: true;\n\n${content}`;
  } else if (entry.path.endsWith('.ts')) {
    return `${autogenerated}/* tslint:disable */\n${content}`.replace(
      /@sbb-esta\/angular-public/g,
      '@sbb-esta/angular-business'
    );
  } else {
    return `${autogenerated}${content}`;
  }
}
