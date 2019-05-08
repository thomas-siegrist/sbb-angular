/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-archive-box',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M12 17.7h7.5m6.75-4.5h-21m10.8-6h-6.3l-4.5 6v18h21l4.5-6v-18H24.15m-12.899 6l6-7.5 6 7.5M18.9 7.764l2.85-3.562 5.806 7.258M26.25 31.201v-18l4.5-6"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArchiveBoxComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconArchiveBoxComponent],
  exports: [IconArchiveBoxComponent],
})
export class IconArchiveBoxModule { }