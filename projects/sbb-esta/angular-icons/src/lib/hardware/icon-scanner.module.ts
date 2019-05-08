/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-scanner',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M5.25 9.75V7.8c0-1.266 1.365-2.55 2.55-2.55h20.4c1.146 0 2.55 1.58 2.55 2.55v1.95l-3 6 3 9v3.3c0 1.177-1.239 2.7-2.55 2.7H7.8c-1.311 0-2.55-1.257-2.55-2.55v-3.45l3-9-3-6zm0 0h25.5m-22.5 6h19.5m-22.5 9h25.5m-6.75 3h3"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconScannerComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconScannerComponent],
  exports: [IconScannerComponent],
})
export class IconScannerModule { }