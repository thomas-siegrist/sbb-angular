/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconMuseumLarge]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M9.5 32.5v-16 16zm3 0v-16 16zm2 0l-2 6 2-6zm4 0v-16 16zm3.001 0v-16 16zm19-16H7.5v-4.002L24.005 9.5l16.496 2.998V16.5zm-2 16v-16 16zm-3 0v-16 16zm-2 0l2 6m5 0H7.5v-3h1v-3h31.001v3h1v3zm-11-6v-16 16zm-3.001 0v-16 16z"
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
export class SvgIconMuseumLarge {}

@Component({
  selector: 'sbb-icon-museum-large',
  template: `
    <svg sbbIconMuseumLarge></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconMuseumLarge {}

@NgModule({
  declarations: [SvgIconMuseumLarge, IconMuseumLarge],
  exports: [SvgIconMuseumLarge, IconMuseumLarge]
})
export class IconMuseumLargeModule {}
