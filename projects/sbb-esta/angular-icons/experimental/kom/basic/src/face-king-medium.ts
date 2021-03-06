/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconFaceKingMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M26.25 21a8.251 8.251 0 11-16.502-.002A8.251 8.251 0 0126.25 21zm-10.5-1.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM13.7 24a5.24 5.24 0 004.3 2.25c1.781 0 3.351-.892 4.3-2.25m.95-12.946V7.5L21 9l-1.5-1.5L18 9l-1.5-1.5L15 9l-2.25-1.5v3.554A11.19 11.19 0 0118 9.75c1.898 0 3.683.474 5.25 1.304z"
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
export class SvgIconFaceKingMedium {}

@Component({
  selector: 'sbb-icon-face-king-medium',
  template: `
    <svg sbbIconFaceKingMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconFaceKingMedium {}

@NgModule({
  declarations: [SvgIconFaceKingMedium, IconFaceKingMedium],
  exports: [SvgIconFaceKingMedium, IconFaceKingMedium]
})
export class IconFaceKingMediumModule {}
