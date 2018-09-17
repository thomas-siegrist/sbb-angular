import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-service-1',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 13"><path d="M0 0h10.8v13H0V0zm1.2 11.8h8.4V1.2H1.2v10.6z"/><path d="M5.8 10.6V4.3L4.4 5.7l-.8-1.2 2.3-2.1h1.3v8.3H5.8"/></svg>',
  styles: []
})
export class IconService1Component {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
