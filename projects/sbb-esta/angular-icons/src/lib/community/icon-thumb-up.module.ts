/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-thumb-up',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M24 18.75h2.25M8.248 27.764h4.502V15.752H8.248v12.011zM24 21.75h2.25M24 24.75h.75m1.5-9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 1 1 0 3 1.5 1.5 0 1 1 0 3h-1.5a1.5 1.5 0 0 1 0 3h-7.5c-2.262 0-4.5-.75-4.5-4.5v-7.5h1.5l6.435-7.058A1.502 1.502 0 0 1 23.25 9.75c0 .183-.032.359-.093.52L21 15.75h5.25"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconThumbUpComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconThumbUpComponent],
  exports: [IconThumbUpComponent],
})
export class IconThumbUpModule { }