/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconWeatherUnknownSmall]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path
        stroke="#000"
        d="M16.02 14.5c2.15-.709 1.884-4.213-.32-4.125 1.102-3.737-3.813-5.454-5.317-2.02-1.324-1.092-3.443-.042-3.21 1.919-1.905 0-2.457 3.419-.199 4.19"
      />
      <svg:path
        fill="#000"
        d="M11.026 16.999v-.838h.88v.838h-.88zm-1.39-4.077c.019-.5.118-.887.297-1.161.166-.252.386-.447.66-.584.275-.137.583-.205.926-.205.551 0 .99.154 1.316.463.304.285.456.66.456 1.124 0 .384-.103.714-.31.992-.092.126-.313.357-.664.696a2.222 2.222 0 00-.324.368 1.026 1.026 0 00-.128.365 3.193 3.193 0 00-.041.565h-.693c.006-.411.042-.717.111-.915.049-.146.118-.276.209-.391.091-.116.293-.331.606-.649.2-.203.332-.387.395-.551.051-.14.077-.283.077-.428 0-.268-.074-.494-.224-.676-.179-.223-.444-.335-.795-.335-.725 0-1.116.441-1.173 1.322h-.701z"
      />
    </svg:g>
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-weather',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconWeatherUnknownSmall {}

@Component({
  selector: 'sbb-icon-weather-unknown-small',
  template: `
    <svg sbbIconWeatherUnknownSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconWeatherUnknownSmall {}

@NgModule({
  declarations: [SvgIconWeatherUnknownSmall, IconWeatherUnknownSmall],
  exports: [SvgIconWeatherUnknownSmall, IconWeatherUnknownSmall]
})
export class IconWeatherUnknownSmallModule {}