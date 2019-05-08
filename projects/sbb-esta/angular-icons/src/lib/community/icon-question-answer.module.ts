/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-question-answer',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><g fill="none" fill-rule="evenodd"><path stroke="#000" d="M5.25 8.25h18v13.5H13.125L9.75 25.125V21.75h-4.5V8.25zm18 4.5h7.5v13.5h-4.5v3.375l-3.375-3.375H14.25v-4.5m14.25-4.5h-5.25m3.75 3h-3.75"/><path fill="#000" d="M13.242 18.942v-1.218h1.266v1.218h-1.266zm-1.997-5.93c.028-.726.17-1.288.428-1.687.237-.366.553-.65.95-.849.394-.2.837-.299 1.329-.299.793 0 1.423.226 1.893.674.436.414.655.958.655 1.635 0 .558-.148 1.04-.444 1.441-.134.184-.452.521-.956 1.013a3.078 3.078 0 0 0-.466.537c-.087.143-.149.32-.184.53a4.674 4.674 0 0 0-.059.82h-.996c.009-.597.062-1.041.159-1.329.07-.211.17-.402.301-.568.131-.168.422-.483.87-.944.29-.297.479-.566.569-.803a1.82 1.82 0 0 0 .111-.62c0-.392-.108-.719-.322-.986-.258-.324-.64-.486-1.143-.486-1.043 0-1.605.64-1.688 1.921h-1.007z"/></g></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconQuestionAnswerComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconQuestionAnswerComponent],
  exports: [IconQuestionAnswerComponent],
})
export class IconQuestionAnswerModule { }