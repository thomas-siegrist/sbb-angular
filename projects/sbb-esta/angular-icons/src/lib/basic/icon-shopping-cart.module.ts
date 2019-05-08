/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-shopping-cart',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M6 8.25h3.75v15H27m-17.25-12h19.5l-3 9.014-16.5-.014m5.987 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm9.013 0c0 .829-.67 1.5-1.5 1.5s-1.5-.671-1.5-1.5a1.5 1.5 0 1 1 3 0z"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconShoppingCartComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconShoppingCartComponent],
  exports: [IconShoppingCartComponent],
})
export class IconShoppingCartModule { }