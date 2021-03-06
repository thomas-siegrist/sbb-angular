/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconLockOpenSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M9.5 9.5V6a2.5 2.5 0 10-5 0M12 17v-4m-5.5 6.5h11v-10h-11v10z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-status',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconLockOpenSmall {}

@Component({
  selector: 'sbb-icon-lock-open-small',
  template: `
    <svg sbbIconLockOpenSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconLockOpenSmall {}

@NgModule({
  declarations: [SvgIconLockOpenSmall, IconLockOpenSmall],
  exports: [SvgIconLockOpenSmall, IconLockOpenSmall]
})
export class IconLockOpenSmallModule {}
