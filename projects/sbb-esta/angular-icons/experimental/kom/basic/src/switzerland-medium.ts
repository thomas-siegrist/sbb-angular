/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSwitzerlandMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M20.005 8.964l-1.519 1.96-5.646 1.539-1.11-.6-3.66 2.72 1.654.568L5.37 19.98l-1.62 5.931 3.21-.816 1.417-.825 3.356 3.211 4.735-.531 2.729-2.953 3.229 4.467 2.361-5.007 5.496 1.435-.348-3.004 2.315.058-.237-4.903-2.015-1.539-.654 1.24-2.664-.804.995-2.964-5.576-2.164z"
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
export class SvgIconSwitzerlandMedium {}

@Component({
  selector: 'sbb-icon-switzerland-medium',
  template: `
    <svg sbbIconSwitzerlandMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSwitzerlandMedium {}

@NgModule({
  declarations: [SvgIconSwitzerlandMedium, IconSwitzerlandMedium],
  exports: [SvgIconSwitzerlandMedium, IconSwitzerlandMedium]
})
export class IconSwitzerlandMediumModule {}
