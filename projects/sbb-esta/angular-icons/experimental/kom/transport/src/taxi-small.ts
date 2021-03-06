/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTaxiSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M5.5 16.5v2h3v-2m7 0l.001 2H18.5v-2m-13-6H4m16 0h-1.5m0 1h-13m11 0a2 2 0 00-4 0m3.5-5c1.706 0 2.5.794 2.5 2.5v7.5h-13V9c0-1.706.794-2.5 2.5-2.5h8m-2.5 0V5h-3v1.5m-2 7.5A.5.5 0 107.498 14 .5.5 0 008.5 14zm8 0a.5.5 0 10-1.002.001A.5.5 0 0016.5 14z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-transport',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconTaxiSmall {}

@Component({
  selector: 'sbb-icon-taxi-small',
  template: `
    <svg sbbIconTaxiSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconTaxiSmall {}

@NgModule({
  declarations: [SvgIconTaxiSmall, IconTaxiSmall],
  exports: [SvgIconTaxiSmall, IconTaxiSmall]
})
export class IconTaxiSmallModule {}
