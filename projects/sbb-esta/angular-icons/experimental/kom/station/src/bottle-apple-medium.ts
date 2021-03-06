/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconBottleAppleMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M11.31 6.75H8.19a2.775 2.775 0 00-2.535 1.641c-1.098 2.456-1.905 3.445-1.905 4.621v16.69c0 1.406 1.157 2.548 2.586 2.548h6.828c1.428 0 2.586-1.142 2.586-2.549V13.012c0-1.176-.807-2.165-1.905-4.621A2.776 2.776 0 0011.31 6.75zm-7.56 21h6v-12h-6v12zm4.5-21h3V3.748h-3V6.75zM25.5 31.5c.912.038 1.319.718 3 .75 2.297 0 3.75-3 3.75-7.356 0-4.644-2.395-4.674-3.75-4.644-1.762 0-1.407.75-3 .75s-1.239-.75-3-.75c-1.356-.03-3.75 0-3.75 4.644 0 4.356 1.453 7.356 3.75 7.356 1.681-.032 2.088-.712 3-.75zm3.703-15.75S25.5 15.938 25.5 21"
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
export class SvgIconBottleAppleMedium {}

@Component({
  selector: 'sbb-icon-bottle-apple-medium',
  template: `
    <svg sbbIconBottleAppleMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconBottleAppleMedium {}

@NgModule({
  declarations: [SvgIconBottleAppleMedium, IconBottleAppleMedium],
  exports: [SvgIconBottleAppleMedium, IconBottleAppleMedium]
})
export class IconBottleAppleMediumModule {}
