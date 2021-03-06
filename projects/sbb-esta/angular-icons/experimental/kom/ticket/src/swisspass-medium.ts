/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSwisspassMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M27 15.751h-4.5m2.25 2.25v-4.5m3 12.749H8.25c-1.656 0-3-1.344-3-3v-10.5c0-1.656 1.344-3 3-3h19.5c1.656 0 3 1.344 3 3v10.5c0 1.656-1.344 3-3 3zm-16.5-7.5c-2.036.795-3 2.25-3 4.5h9c0-2.25-.965-3.712-3-4.5h-3zm1.5-6a3 3 0 110 6 3 3 0 010-6z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-ticket',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconSwisspassMedium {}

@Component({
  selector: 'sbb-icon-swisspass-medium',
  template: `
    <svg sbbIconSwisspassMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSwisspassMedium {}

@NgModule({
  declarations: [SvgIconSwisspassMedium, IconSwisspassMedium],
  exports: [SvgIconSwisspassMedium, IconSwisspassMedium]
})
export class IconSwisspassMediumModule {}
