/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-laptop-smartphone',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#000"
          d="M19.5 11V4.5h-13v9l-4 3v2H14m-.008-5H6.5m7.5 3H2.5m14-4h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1v-7a1 1 0 011-1zm.5 1h3"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill="none"
          stroke="#000"
          d="M29.25 16.5V6.75H9.75v13.5l-6 4.5v3H21m-.012-7.5H9.75M21 24.75H3.75m21-6h6c.83 0 1.5.672 1.5 1.5v10.5c0 .83-.67 1.5-1.5 1.5h-6c-.83 0-1.5-.67-1.5-1.5v-10.5c0-.828.67-1.5 1.5-1.5zm.75 1.5H30"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('large') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path
          fill="none"
          stroke="#000"
          d="M30.5 20.41c0-1.05.836-1.91 1.857-1.91h9.286c1.021 0 1.857.86 1.857 1.91V37.59c0 1.05-.836 1.91-1.857 1.91h-9.286c-1.021 0-1.857-.86-1.857-1.91V20.41zM36 37.5h2m-7.5-2h13m-8.5-15h4m-10 14H6.493A1.993 1.993 0 014.5 32.508V31.5H29m0 0H7.5l-.062-20.997c0-1.106.896-2.003 2.003-2.003h29.055c1.108 0 2.004.897 2.004 2.003V17m-31 14.5v-21h29V17"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconLaptopSmartphoneComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconLaptopSmartphoneComponent],
  exports: [IconLaptopSmartphoneComponent]
})
export class IconLaptopSmartphoneModule {}
