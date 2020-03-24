/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconUserGroupRowMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M14.296 12.182c-.627-.58-1.411-.935-2.296-.935-2.136 0-3.75 2.001-3.75 4.503 0 2.5 1.614 4.5 3.75 4.5 1.97 0 3.48-1.707 3.705-3.933m0 0c.02-.187.045-.373.045-.566 0-1.467-.564-2.748-1.454-3.569m.2 6.947c3.78 2.17 5.44 5.694 5.754 10.12H3.75c.075-4.538 2.099-8.05 5.726-10.138m10.82-9.928c-.628-.579-1.412-.934-2.296-.934-1.97 0-3.478 1.707-3.705 3.933.89.82 1.455 2.101 1.455 3.568 0 .195-.027.38-.046.567.627.58 1.411.935 2.296.935 1.97 0 3.479-1.707 3.704-3.935M24 5.248c-1.97 0-3.479 1.709-3.705 3.935.891.82 1.455 2.101 1.455 3.569 0 .193-.027.377-.045.565.627.579 1.412.934 2.295.934 2.137 0 3.75-1.999 3.75-4.5S26.137 5.25 24 5.25zm-2.295 8.07c.02-.188.045-.372.045-.566 0-1.467-.564-2.748-1.454-3.568m.203 6.944c3.78 2.169 5.436 5.695 5.751 10.122h-6.486m6.74-13.116c3.78 2.17 5.43 5.69 5.746 10.116h-6.465"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 36px;
        height: 36px;
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
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-user',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconUserGroupRowMedium {}

@Component({
  selector: 'sbb-icon-user-group-row-medium',
  template: `
    <svg sbbIconUserGroupRowMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconUserGroupRowMedium {}

@NgModule({
  declarations: [SvgIconUserGroupRowMedium, IconUserGroupRowMedium],
  exports: [SvgIconUserGroupRowMedium, IconUserGroupRowMedium]
})
export class IconUserGroupRowMediumModule {}