/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-office-chair',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M11.25 24.75h13.5v-3h-13.5v3zm6-3h1.5v-3h-1.5v3zm0 9h1.5v-6h-1.5v6zm-5.25 0h12m-11.25-12h10.5v-12h-10.5v12zM26.25 21v-4.5M9.75 21v-4.5"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconOfficeChairComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconOfficeChairComponent],
  exports: [IconOfficeChairComponent],
})
export class IconOfficeChairModule { }