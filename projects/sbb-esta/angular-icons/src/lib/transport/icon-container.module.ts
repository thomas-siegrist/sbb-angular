/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-container',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M5.25 30.75h27v-13.5h-27v13.5zm4.5-13.5v13.5m4.5-13.5v13.5m4.5-13.5v13.5m4.5-13.5v13.5m4.5-13.5v13.5M7.5 17.25l11.25-6 11.25 6M20.259 4.5l-.01 3.095A3 3 0 1 1 16.5 10.5"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconContainerComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconContainerComponent],
  exports: [IconContainerComponent],
})
export class IconContainerModule { }