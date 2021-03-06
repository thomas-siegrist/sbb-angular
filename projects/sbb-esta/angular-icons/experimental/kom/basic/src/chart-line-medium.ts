/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconChartLineMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M6.75 7.5v21.75H30m-23.25 0L12 24l4.5-1.5 2.25-5.25h3l1.5-6h3L28.5 9"
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
export class SvgIconChartLineMedium {}

@Component({
  selector: 'sbb-icon-chart-line-medium',
  template: `
    <svg sbbIconChartLineMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconChartLineMedium {}

@NgModule({
  declarations: [SvgIconChartLineMedium, IconChartLineMedium],
  exports: [SvgIconChartLineMedium, IconChartLineMedium]
})
export class IconChartLineMediumModule {}
