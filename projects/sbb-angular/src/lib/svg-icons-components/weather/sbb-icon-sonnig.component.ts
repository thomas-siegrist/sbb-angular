import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-sonnig',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.5 8c-2.466 0-4.472 2.018-4.472 4.499a4.5 4.5 0 0 0 4.495 4.495C14.99 16.994 17 14.98 17 12.5c0-2.481-2.019-4.5-4.5-4.5zm.023 7.994A3.5 3.5 0 0 1 9.028 12.5C9.028 10.569 10.585 9 12.5 9c1.93 0 3.5 1.57 3.5 3.5 0 1.927-1.56 3.494-3.477 3.494zM4 12h3.003v1H4zM6.039 6.67l.707-.708L9.023 8.24l-.707.707zM12.012 3.988h1v3.015h-1zM16.042 8.29l2.264-2.238.703.711-2.263 2.239zM17.994 12H21v1h-3.006zM16.052 16.69l.705-.709 2.267 2.257-.705.71zM12 17.993h1v3.003h-1zM6.042 18.31l2.261-2.262.708.707-2.262 2.261z"/></svg>',
  styles: []
})
export class IconSonnigComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
