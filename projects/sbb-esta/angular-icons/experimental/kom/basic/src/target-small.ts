/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTargetSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M10 13.5a.5.5 0 110 1 .5.5 0 010-1zm0-2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0-3a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 5.5l7-7-7 7zm4.5-4.5V6v3.5zm3.5 0h-3.5H18zm2-2h-3.5V4"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconTargetSmall {}

@Component({
  selector: 'sbb-icon-target-small',
  template: `
    <svg sbbIconTargetSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconTargetSmall {}

@NgModule({
  declarations: [SvgIconTargetSmall, IconTargetSmall],
  exports: [SvgIconTargetSmall, IconTargetSmall]
})
export class IconTargetSmallModule {}
