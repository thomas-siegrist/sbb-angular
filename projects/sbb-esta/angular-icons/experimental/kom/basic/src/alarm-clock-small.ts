/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconAlarmClockSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M12 4.5a7.5 7.5 0 017.5 7.5c0 4.143-3.357 7.5-7.5 7.5a7.5 7.5 0 010-15zm-8.5 2l3-3m11 0l3 3m-9 .5v5.5H17"
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
export class SvgIconAlarmClockSmall {}

@Component({
  selector: 'sbb-icon-alarm-clock-small',
  template: `
    <svg sbbIconAlarmClockSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconAlarmClockSmall {}

@NgModule({
  declarations: [SvgIconAlarmClockSmall, IconAlarmClockSmall],
  exports: [SvgIconAlarmClockSmall, IconAlarmClockSmall]
})
export class IconAlarmClockSmallModule {}
