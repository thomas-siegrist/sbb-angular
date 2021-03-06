/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconCloudIceSmall]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path
        stroke="#000"
        d="M7.2 10.2c-2.14 0-2.567 4.3.8 4.3h7c3.203 0 3.2-4.3.7-4.2 1.1-3.7-3.8-5.4-5.3-2-1.32-1.082-3.432-.042-3.2 1.9z"
      />
      <svg:path
        fill="#000"
        d="M6 17v-1h1v1H6zm2 0v-1h1v1H8zm-2 2v-1h1v1H6zm1-1v-1h1v1H7zm1 1v-1h1v1H8zm2 2v-1h1v1h-1zm2 0v-1h1v1h-1zm-2 2v-1h1v1h-1zm1-1v-1h1v1h-1zm1 1v-1h1v1h-1zm2-6v-1h1v1h-1zm2 0v-1h1v1h-1zm-2 2v-1h1v1h-1zm1-1v-1h1v1h-1zm1 1v-1h1v1h-1z"
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
export class SvgIconCloudIceSmall {}

@Component({
  selector: 'sbb-icon-cloud-ice-small',
  template: `
    <svg sbbIconCloudIceSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconCloudIceSmall {}

@NgModule({
  declarations: [SvgIconCloudIceSmall, IconCloudIceSmall],
  exports: [SvgIconCloudIceSmall, IconCloudIceSmall]
})
export class IconCloudIceSmallModule {}
