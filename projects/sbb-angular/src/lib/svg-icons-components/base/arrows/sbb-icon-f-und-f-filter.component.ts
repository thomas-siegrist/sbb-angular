import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-f-und-f-filter',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 10c-1.2 0-2.2.9-2.4 2H2v1h11.1c.2 1.1 1.2 2 2.4 2s2.2-.9 2.4-2H22v-1h-4.1c-.2-1.1-1.2-2-2.4-2zm0 4c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm-7 2c-1.2 0-2.2.9-2.4 2H2v1h4.1c.2 1.1 1.2 2 2.4 2s2.2-.9 2.4-2H22v-1H10.9c-.2-1.1-1.2-2-2.4-2zm0 4c-.8 0-1.5-.7-1.5-1.5S7.7 17 8.5 17s1.5.7 1.5 1.5S9.3 20 8.5 20zm0-16c-1.2 0-2.2.9-2.4 2H2v1h4.1c.2 1.1 1.2 2 2.4 2s2.2-.9 2.4-2H22V6H10.9c-.2-1.1-1.2-2-2.4-2zm0 4C7.7 8 7 7.3 7 6.5S7.7 5 8.5 5s1.5.7 1.5 1.5S9.3 8 8.5 8z"/></svg>',
  styles: []
})
export class IconFUndFFilterComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
