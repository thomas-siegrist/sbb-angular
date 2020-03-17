/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconDeskAdjustableSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M16.5 5.7l2-2 2 2m-5 .6l-2 2-2-2m9 14.7V10.5h-17V21m17-8.5h-17m10-9.5v5.3m5-4.6V9"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-hardware',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconDeskAdjustableSmall {}

@Component({
  selector: 'sbb-icon-desk-adjustable-small',
  template: `
    <svg sbbIconDeskAdjustableSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconDeskAdjustableSmall {}

@NgModule({
  declarations: [SvgIconDeskAdjustableSmall, IconDeskAdjustableSmall],
  exports: [SvgIconDeskAdjustableSmall, IconDeskAdjustableSmall]
})
export class IconDeskAdjustableSmallModule {}