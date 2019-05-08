/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-folder-open',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg *ngSwitchDefault [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="#000" d="M18.51 9.5v-2h-8v-2H4.5l.01 12h14.149l2.651-8H7.36l-2.85 8"/></svg>
      <svg *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''" [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M27.765 14.25v-3h-12v-3H6.75l.015 18h21.223l3.977-12H11.04l-4.275 12"/></svg>
    </ng-container>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFolderOpenComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconFolderOpenComponent],
  exports: [IconFolderOpenComponent],
})
export class IconFolderOpenModule { }