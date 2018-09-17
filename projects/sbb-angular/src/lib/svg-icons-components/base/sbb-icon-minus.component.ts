import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-minus',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 12.5H4v-1h16v1z"/></svg>',
  styles: []
})
export class IconMinusComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
