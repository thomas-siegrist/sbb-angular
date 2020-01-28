/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconToiletMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M9.75 8.25a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zm1.5 12v-7.5h-6v7.5h1.5v9h3v-9h1.5zm16.5 3v6h-3v-6m3-15a1.5 1.5 0 11-3 .001 1.5 1.5 0 013 0zm3 15l-3-10.5h-3l-3 10.5h9zM17.25 6v24"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconToiletMedium {}

@Component({
  selector: 'sbb-icon-toilet-medium',
  template: `
    <svg sbbIconToiletMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconToiletMedium {}

@NgModule({
  declarations: [SvgIconToiletMedium, IconToiletMedium],
  exports: [SvgIconToiletMedium, IconToiletMedium]
})
export class IconToiletMediumModule {}