import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-service-pr',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 13"><path d="M4.1 6H5c1.4 0 2.9-.7 2.9-2.4 0-1.3-1-1.6-2.1-1.6h-.9l-.8 4zm-1.5 7H0L2.8 0H5c2.4 0 5.7.1 5.7 3.4 0 3.1-2.6 4.7-5.5 4.7H3.7L2.6 13zm12-7.5h.9c1.4 0 3.1-.4 3.1-2.1C18.6 2 17.4 2 16.4 2h-1.1l-.7 3.5zM13.1 0h3.1c2.4 0 5.2 0 5.2 3.1 0 2.2-1.7 3.4-3.8 3.5.7 0 1.2.5 1.3 1.2l1.2 5.2h-2.7l-.6-3.1c-.3-1.4-.2-2.3-1.6-2.3h-1L13 13h-2.6l2.7-13z"/></svg>',
  styles: []
})
export class IconServicePrComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
