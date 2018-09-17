import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-service-je',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 13"><path d="M8.1 0L6.4 8.7C5.9 11.2 5 13 2.1 13c-.7 0-1.4-.1-2.1-.3l.6-2.2c.3.1.7.2 1.2.2 1.4 0 1.8-1 2-2.2L5.6 0h2.5zM11 0h7.5l-.4 2h-5l-.7 3.1H17l-.4 2h-4.5l-.8 3.6h5.1l-.4 2H8.3"/></svg>',
  styles: []
})
export class IconServiceJeComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
