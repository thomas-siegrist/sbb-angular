import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-service-vl',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 13"><path d="M0 0h2.6l1.2 10.1L9.3 0h2.8L4.8 13H1.7M13.6 0h2.6l-2.3 11H19l-.4 2h-7.7"/></svg>',
  styles: []
})
export class IconServiceVlComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
