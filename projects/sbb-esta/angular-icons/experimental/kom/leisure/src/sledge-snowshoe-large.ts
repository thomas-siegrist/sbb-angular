/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSledgeSnowshoeLarge]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M6 38.5h26.5c5.478 0 8-1.806 8-6.5M6 32.501h28m-24.5 0V38.5m7-5.999V38.5m7-5.999V38.5m7.001-5.999V38.5M41 18.5c-10.446 0-14.707 9-25.5 9a9 9 0 010-18c10.793 0 15.054 9 25.5 9zM13.5 9.721v5.314m4-5.427v5.428m-4 6.929v5.312m4-5.312v5.429M26.502 13v11M41 18.5H19.5m-4-4a4 4 0 110 8 4 4 0 010-8z"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 48px;
        height: 48px;
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
    viewBox: '0 0 48 48',
    class: 'sbb-icon sbb-icon-kom sbb-icon-leisure',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconSledgeSnowshoeLarge {}

@Component({
  selector: 'sbb-icon-sledge-snowshoe-large',
  template: `
    <svg sbbIconSledgeSnowshoeLarge></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSledgeSnowshoeLarge {}

@NgModule({
  declarations: [SvgIconSledgeSnowshoeLarge, IconSledgeSnowshoeLarge],
  exports: [SvgIconSledgeSnowshoeLarge, IconSledgeSnowshoeLarge]
})
export class IconSledgeSnowshoeLargeModule {}
