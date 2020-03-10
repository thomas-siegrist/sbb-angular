/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaX]',
  template: `
    <svg:path
      fill="#000"
      fill-rule="evenodd"
      d="M7.42 1.037l2.022 4.801h.04l3.84-4.8h3.3l-5.78 6.66L14.082 15h-3.06l-2.14-5.602h-.04L4.48 15H1l6.46-7.582-3.06-6.38z"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 18px;
        height: 16px;
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
    viewBox: '0 0 18 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconSaX {}

@Component({
  selector: 'sbb-icon-sa-x',
  template: `
    <svg sbbIconSaX></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSaX {}

@NgModule({
  declarations: [SvgIconSaX, IconSaX],
  exports: [SvgIconSaX, IconSaX]
})
export class IconSaXModule {}