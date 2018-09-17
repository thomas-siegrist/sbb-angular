import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-service-gp',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 13"><path d="M11.1 2.9c-1-.6-2.2-.9-3.5-.9-3.1 0-5 2.4-5 5.4 0 2 1.4 3.7 3.5 3.7.6 0 1 0 1.2-.1L8 7.7H5.5l.4-2H11l-1.4 6.9c-.8.1-2.2.4-3.4.4C2.5 13 0 11.3 0 7.4 0 2.8 3 0 7.5 0c1.4 0 2.9.2 4.2.7l-.6 2.2zM16 6h.9c1.4 0 2.8-.7 2.8-2.3 0-1.3-1-1.5-2.1-1.5h-.8L16 6zm-1.4 6.8H12L14.7.2h2.1c2.3 0 5.5.1 5.5 3.3 0 3-2.5 4.5-5.3 4.5h-1.5l-.9 4.8z"/></svg>',
  styles: []
})
export class IconServiceGpComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
