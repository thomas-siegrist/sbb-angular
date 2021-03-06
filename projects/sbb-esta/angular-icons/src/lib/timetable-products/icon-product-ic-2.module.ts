/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-product-ic-2',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 59 20"
    >
      <g fill="none" fill-rule="evenodd">
        <rect width="59" height="20" fill="#EB0000" rx="2" />
        <path
          fill="#FFF"
          fill-rule="nonzero"
          d="M44.632 13.743V15.8h-8.301c-.003-.612.1-1.22.303-1.796a4.376 4.376 0 01.856-1.47c.305-.337.639-.647.997-.926.381-.301 1.14-.852 2.274-1.654.448-.285.84-.65 1.16-1.075.223-.343.339-.746.33-1.155.02-.453-.14-.896-.445-1.23a1.538 1.538 0 00-1.17-.471c-1.188 0-1.8.857-1.837 2.57h-2.216v-.252c0-1.403.392-2.49 1.175-3.26.762-.748 1.747-1.122 2.956-1.122a4.009 4.009 0 012.688.917c.783.665 1.175 1.558 1.175 2.682a3.69 3.69 0 01-.938 2.53 4.41 4.41 0 01-.576.558c-.178.14-.649.477-1.41 1.01-.726.505-1.245.893-1.558 1.162a6.218 6.218 0 00-.87.925h5.407zM9.221 4.2h4.056L8.259 15.8H4.186zM15.948 4.2h14.395l-1.49 3.445H18.572l-2.041 4.71h10.285l-1.49 3.445H10.931z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconProductIc2Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIc2Component],
  exports: [IconProductIc2Component]
})
export class IconProductIc2Module {}
