/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconShoppingBagCouponMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd" stroke="#000">
      <svg:path
        d="M12.75 15V8.25a4.5 4.5 0 119 0V15m-13.5-3.75l-1.5 19.5h21l-1.5-19.5h-18zm9 6.75v7.5"
      />
      <svg:path stroke-dasharray="1 1" d="M23.25 21.75a6 6 0 10-12 0 6 6 0 0012 0z" />
    </svg:g>
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
export class SvgIconShoppingBagCouponMedium {}

@Component({
  selector: 'sbb-icon-shopping-bag-coupon-medium',
  template: `
    <svg sbbIconShoppingBagCouponMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconShoppingBagCouponMedium {}

@NgModule({
  declarations: [SvgIconShoppingBagCouponMedium, IconShoppingBagCouponMedium],
  exports: [SvgIconShoppingBagCouponMedium, IconShoppingBagCouponMedium]
})
export class IconShoppingBagCouponMediumModule {}