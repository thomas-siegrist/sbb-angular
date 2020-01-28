/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconContactMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M8.25 29.25h19.5V6.75H8.25v22.5zM6 12.75h4.5m-4.5 6h4.5m-4.5 6h4.5m9.75-10.485c0 1.68-.974 2.985-2.25 2.985s-2.25-1.321-2.25-3c0-1.68.974-3 2.25-3s2.25 1.335 2.25 3.015zm-3.967 1.93c-2.052 1.02-3.532 3.777-3.532 7.056h10.5c0-3.276-1.48-6.033-3.53-7.055"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconContactMedium {}

@Component({
  selector: 'sbb-icon-contact-medium',
  template: `
    <svg sbbIconContactMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconContactMedium {}

@NgModule({
  declarations: [SvgIconContactMedium, IconContactMedium],
  exports: [SvgIconContactMedium, IconContactMedium]
})
export class IconContactMediumModule {}