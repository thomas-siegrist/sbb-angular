/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconLaptopSmartphoneMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M29.25 16.5V6.75H9.75v13.5l-6 4.5v3H21m-.012-7.5H9.75M21 24.75H3.75m21-6h6c.83 0 1.5.672 1.5 1.5v10.5c0 .83-.67 1.5-1.5 1.5h-6c-.83 0-1.5-.67-1.5-1.5v-10.5c0-.828.67-1.5 1.5-1.5zm.75 1.5H30"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-hardware',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconLaptopSmartphoneMedium {}

@Component({
  selector: 'sbb-icon-laptop-smartphone-medium',
  template: `
    <svg sbbIconLaptopSmartphoneMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconLaptopSmartphoneMedium {}

@NgModule({
  declarations: [SvgIconLaptopSmartphoneMedium, IconLaptopSmartphoneMedium],
  exports: [SvgIconLaptopSmartphoneMedium, IconLaptopSmartphoneMedium]
})
export class IconLaptopSmartphoneMediumModule {}