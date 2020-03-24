/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaXr]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M7.42 1.037l2.022 4.801h.04l3.84-4.8h3.3l-5.78 6.66L14.082 15h-3.06l-2.14-5.602h-.04L4.48 15H1l6.46-7.582-3.06-6.38zM20.161 6.998h1.02c1.501 0 3.321-.46 3.321-2.3 0-1.461-1.26-1.461-2.4-1.461h-1.16l-.78 3.761zm-1.6-5.961h3.3c2.58 0 5.561-.04 5.561 3.301 0 2.4-1.8 3.681-4.08 3.721v.04c.76.04 1.24.519 1.42 1.28L26.102 15h-2.94l-.68-3.28c-.32-1.481-.24-2.521-1.76-2.521h-1.06L18.44 15h-2.8l2.92-13.963z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 29px;
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
    viewBox: '0 0 29 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconSaXr {}

@Component({
  selector: 'sbb-icon-sa-xr',
  template: `
    <svg sbbIconSaXr></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSaXr {}

@NgModule({
  declarations: [SvgIconSaXr, IconSaXr],
  exports: [SvgIconSaXr, IconSaXr]
})
export class IconSaXrModule {}