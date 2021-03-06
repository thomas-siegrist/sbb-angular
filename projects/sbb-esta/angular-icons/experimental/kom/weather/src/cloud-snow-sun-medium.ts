/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconCloudSnowSunMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M10.8 15.3c-3.211 0-3.85 6.45 1.2 6.45h10.5c5.093 0 4.8-6.45 1.05-6.3 1.65-5.55-5.7-8.1-7.95-3-1.981-1.623-5.148-.063-4.8 2.85zm15.208 1.78c1.9-.527 3.242-2.233 3.242-4.33 0-2.536-1.964-4.5-4.5-4.5-1.49 0-2.783.677-3.594 1.75M24 24.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm9 3a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-weather',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconCloudSnowSunMedium {}

@Component({
  selector: 'sbb-icon-cloud-snow-sun-medium',
  template: `
    <svg sbbIconCloudSnowSunMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconCloudSnowSunMedium {}

@NgModule({
  declarations: [SvgIconCloudSnowSunMedium, IconCloudSnowSunMedium],
  exports: [SvgIconCloudSnowSunMedium, IconCloudSnowSunMedium]
})
export class IconCloudSnowSunMediumModule {}
