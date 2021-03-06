/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconFormSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M15.5 4.5h4v16h-15v-16h4M7 8.5h10m-10 3h10m-10 3h10m-10 3h5m1.5-14s-.042-1-1.5-1-1.5 1-1.5 1h-2v2h7v-2h-2z"
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
export class SvgIconFormSmall {}

@Component({
  selector: 'sbb-icon-form-small',
  template: `
    <svg sbbIconFormSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconFormSmall {}

@NgModule({
  declarations: [SvgIconFormSmall, IconFormSmall],
  exports: [SvgIconFormSmall, IconFormSmall]
})
export class IconFormSmallModule {}
