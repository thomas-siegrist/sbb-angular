import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-service-ts',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 13"><path d="M.5.2h10.1l-.4 2H6.5L4.1 12.8H1.3L3.7 2.2H0m18.7.4c-.8-.3-1.8-.6-2.8-.6-.9 0-2.2.4-2.2 1.4 0 2 4.5 1.9 4.5 5.4 0 3.1-2.5 4.2-5.4 4.2-1.3 0-2.6-.3-3.7-.7l.7-2.1c1 .5 2.1.9 3.2.9 1.3 0 2.5-.6 2.5-2 0-2.3-4.5-1.9-4.5-5.3C11 1.2 13.4 0 15.9 0c1.1 0 2.3.1 3.4.6l-.6 2z"/></svg>',
  styles: []
})
export class IconServiceTsComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
