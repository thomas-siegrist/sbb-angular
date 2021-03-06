/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconFolderLockSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M13 17.5H4.5v-9h10l1-2h3.995L19.5 12m-2 4.5v-2a1 1 0 112 0v2m-1 3.5v-2.031m-3 3.531h6v-5h-6v5z"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 24px;
        height: 24px;
      }
      :host-context(.sbb-icon-inherit-color) [fill]:not([fill='none']) {
        fill: currentColor;
      }
      :host-context(.sbb-icon-inherit-color) [stroke]:not([stroke='none']) {
        stroke: currentColor;
      }
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-document',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconFolderLockSmall {}

@Component({
  selector: 'sbb-icon-folder-lock-small',
  template: `
    <svg sbbIconFolderLockSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconFolderLockSmall {}

@NgModule({
  declarations: [SvgIconFolderLockSmall, IconFolderLockSmall],
  exports: [SvgIconFolderLockSmall, IconFolderLockSmall]
})
export class IconFolderLockSmallModule {}
