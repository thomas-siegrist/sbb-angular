import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-product-ic',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 20"><path d="M9.249 4.2h4.07L8.284 15.8H4.197zM16 4.2h14.443l-1.496 3.445H18.632l-2.048 4.71h10.32L25.409 15.8H10.965l5.034-11.6z"/></svg>',
  styles: []
})
export class IconProductIcComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
