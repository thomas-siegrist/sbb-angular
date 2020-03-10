/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconArrowCompassSmall]',
  template: `
    <svg:path fill="none" stroke="#000" d="M12.5 18.5v-7h-7l14.44-7.441z" />
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-location',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconArrowCompassSmall {}

@Component({
  selector: 'sbb-icon-arrow-compass-small',
  template: `
    <svg sbbIconArrowCompassSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconArrowCompassSmall {}

@NgModule({
  declarations: [SvgIconArrowCompassSmall, IconArrowCompassSmall],
  exports: [SvgIconArrowCompassSmall, IconArrowCompassSmall]
})
export class IconArrowCompassSmallModule {}