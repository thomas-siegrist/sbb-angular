/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-hostel',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><g fill="none" fill-rule="evenodd"><path stroke="#000" d="M3 30.75h30m-30-24h30m-27.75 24v-24m25.5 24v-24m-24 0h22.5v-3H6.75v3zM20.25 9v7.5M15.75 9v7.5m0-3.75h4.5m-6 18v-4.5h7.5l-.009 4.5"/><path fill="#000" d="M10.5 18l.75 2.401h2.25L11.7 21.6l.75 2.4-1.95-1.349L8.55 24l.75-2.25L7.5 20.4h2.25L10.5 18zm7.5 0l.75 2.25H21l-1.8 1.35.75 2.4L18 22.65 16.05 24l.75-2.25L15 20.4h2.25L18 18zm7.5 0l.75 2.25h2.25l-1.8 1.35.75 2.4-1.95-1.349L23.55 24l.75-2.25-1.8-1.349h2.25L25.5 18z"/></g></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHostelComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconHostelComponent],
  exports: [IconHostelComponent],
})
export class IconHostelModule { }