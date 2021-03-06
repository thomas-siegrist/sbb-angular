/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconGearsSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M19.5 12.5c0 3.886-3.113 7-7 7s-7-3.114-7-7c0-3.887 3.113-7 7-7s7 3.113 7 7zm-4 0c0 1.683-1.317 3-3 3s-3-1.317-3-3 1.317-3 3-3 3 1.317 3 3zm0 0H22m-16.5 0H3m9.5-7V3m0 16.5V22m3.393-3.366L17 20.7M7.755 4.367l3.156 5.575m7.752 5.897l1.993 1.272M18.22 8.446l2.106-1.193M4.03 16.726l2.143-1.213m1.655 5.236l3.19-5.634m4.968-8.696l1.305-2.204M4.166 7.799L6.37 9.104"
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
export class SvgIconGearsSmall {}

@Component({
  selector: 'sbb-icon-gears-small',
  template: `
    <svg sbbIconGearsSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconGearsSmall {}

@NgModule({
  declarations: [SvgIconGearsSmall, IconGearsSmall],
  exports: [SvgIconGearsSmall, IconGearsSmall]
})
export class IconGearsSmallModule {}
