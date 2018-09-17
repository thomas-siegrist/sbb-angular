import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-schnee',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.95 9.716c-.177-.98-.794-1.658-1.637-1.858.296-1.887-.826-3.216-2.104-3.686-1.291-.475-3.019-.2-4.003 1.42a2.456 2.456 0 0 0-2.222.082 2.497 2.497 0 0 0-1.297 2.092c-.823.218-1.446.958-1.614 1.977-.193 1.169.28 2.573 1.769 3.079l.321-.947c-.934-.317-1.227-1.217-1.103-1.969.099-.6.49-1.206 1.14-1.206h.564l-.067-.56c-.083-.686.205-1.28.768-1.59.42-.231 1.065-.317 1.618.137l.509.417.265-.603c.656-1.483 1.982-1.766 3.007-1.39 1.015.373 1.828 1.46 1.357 3.046l-.2.67.699-.028c.968-.055 1.198.827 1.246 1.095.14.776-.195 1.717-1.102 2.015l.31.95c1.452-.475 1.992-1.94 1.775-3.143z"/><path d="M15.343 10.378l-.707-.707L13 11.307V9h-1v2.293l-1.622-1.622-.707.707L11.293 12H9.014v1h2.293l-1.621 1.621.707.707L12 13.721V16h1v-2.293l1.621 1.621.707-.707L13.707 13h2.307v-1H13.72z"/></svg>',
  styles: []
})
export class IconSchneeComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
