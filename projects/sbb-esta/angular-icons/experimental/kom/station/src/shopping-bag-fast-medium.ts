/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconShoppingBagFastMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M12 15.75H3m9 3H6m4.5 3h-3m13.372-6.611l1.041-5.909a3 3 0 115.91 1.041l-1.042 5.909m-9.688-5.516L12.75 26.652l17.727 3.126 1.387-16.51-14.771-2.604z"
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
export class SvgIconShoppingBagFastMedium {}

@Component({
  selector: 'sbb-icon-shopping-bag-fast-medium',
  template: `
    <svg sbbIconShoppingBagFastMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconShoppingBagFastMedium {}

@NgModule({
  declarations: [SvgIconShoppingBagFastMedium, IconShoppingBagFastMedium],
  exports: [SvgIconShoppingBagFastMedium, IconShoppingBagFastMedium]
})
export class IconShoppingBagFastMediumModule {}
