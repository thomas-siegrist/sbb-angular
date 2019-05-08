/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-power-plug',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M9.75 11.25h18V18c0 3.04-2.488 5.25-5.25 5.25H15c-3.117 0-5.25-2.622-5.25-5.25v-6.75zm3-6.75v6.75m12-6.75v6.75m-9 12v4.5h6v-4.5m-3 8.25v-3.75"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPowerPlugComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconPowerPlugComponent],
  exports: [IconPowerPlugComponent],
})
export class IconPowerPlugModule { }