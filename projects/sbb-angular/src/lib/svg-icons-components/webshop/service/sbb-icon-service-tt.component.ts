import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-service-tt',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 13"><path d="M.4 0h10L10 2H6.4L4 13H1.3L3.7 2H0m10.8-2l-.4 2H14l-2.4 11h2.7l2.4-11h3.7l.4-2"/></svg>',
  styles: []
})
export class IconServiceTtComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
