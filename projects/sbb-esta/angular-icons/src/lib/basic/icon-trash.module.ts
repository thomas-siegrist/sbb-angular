/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-trash',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M27.75 11.264V29.25h-18V11.264m4.5 4.486v9m4.5-9v9m4.5-9v9m.675-13.486C22.89 9.47 20.97 8.25 18.75 8.25c-2.221 0-4.138 1.221-5.175 3.014m-6.075 0H30"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTrashComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconTrashComponent],
  exports: [IconTrashComponent],
})
export class IconTrashModule { }