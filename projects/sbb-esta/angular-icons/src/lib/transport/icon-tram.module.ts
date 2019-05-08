/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-tram',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M21 11.25h-6m.75-3v-1.5h4.5v1.5M24 27.75l3 4.5m-18 0l3-4.5m15.75-7.5H8.25m19.5 7.5H8.25V12A3.75 3.75 0 0 1 12 8.25h12A3.75 3.75 0 0 1 27.75 12v15.75zM23.25 24a.751.751 0 0 0-1.5 0 .75.75 0 0 0 1.5 0zm-9 0a.751.751 0 0 0-1.5 0 .75.75 0 0 0 1.5 0z"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTramComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconTramComponent],
  exports: [IconTramComponent],
})
export class IconTramModule { }