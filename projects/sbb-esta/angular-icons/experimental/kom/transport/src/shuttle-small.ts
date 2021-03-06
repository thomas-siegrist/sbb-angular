/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconShuttleSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M4.5 14.5v2h3v-2m9 0v2h3v-2M17 4.5H7m12.5 5h-15m0-2h-1v1h1m12.5-6c1.706 0 2.5.794 2.5 2.5v9.5h-15V5c0-1.706.794-2.5 2.5-2.5h10zM7.5 12a.5.5 0 10-1 0 .5.5 0 001 0zm10 0a.5.5 0 10-1 0 .5.5 0 001 0zm2-3.5h1v-1h-1m-14.75 13H10m-3.356-1.852L4.75 20.5l1.896 1.842m12.604-1.851H14m3.356 1.852l1.894-1.852-1.897-1.843"
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
export class SvgIconShuttleSmall {}

@Component({
  selector: 'sbb-icon-shuttle-small',
  template: `
    <svg sbbIconShuttleSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconShuttleSmall {}

@NgModule({
  declarations: [SvgIconShuttleSmall, IconShuttleSmall],
  exports: [SvgIconShuttleSmall, IconShuttleSmall]
})
export class IconShuttleSmallModule {}
