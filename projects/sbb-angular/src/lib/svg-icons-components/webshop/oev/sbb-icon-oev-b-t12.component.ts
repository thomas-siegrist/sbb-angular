import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-oev-b-t12',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8.4V7.2c0-.2.1-.3.3-.3H6c.2 0 .3.1.3.3l.2 1.3v.1c0 .2-.1.3-.3.3H4.3c-.2-.1-.3-.3-.3-.5zm0 3.8v-1.3c0-.2.1-.3.3-.3h1.9c.2 0 .3.1.3.3v1.3c0 .2-.1.3-.3.3H4.3c-.2 0-.3-.1-.3-.3zm3.1 0v-1.3c0-.2.1-.3.3-.3H9c.2 0 .3.1.3.3l.2 1.3v.1c0 .2-.1.3-.3.3H7.4c-.2-.1-.3-.2-.3-.4zm-4-5.3c.2 0 .3.1.3.3v1.3c0 .2-.1.3-.3.3h-.6v1.9h.6c.2 0 .3.1.3.3v1.3c0 .2-.1.3-.3.3h-.6v3.8c.3 0 .6 0 .9-.1l2.1-.4c.2 0 .5 0 .7-.1.2 0 .5 0 .7.1l2.1.4c.3.1.6.1.9.1.3 0 .6 0 .9-.1l2.2-.5c.2 0 .5 0 .7-.1.2 0 .5 0 .7.1l1.3.3 1.9-3.6h-7.4l-.3-1.9H11V8.8H7.1l-.3-1.9h.4c.2 0 .3-.1.3-.3s-.1-.3-.3-.3H2.5v.6h.6z"/><path d="M5.6 16.4h1.2l2.2.4c.3.1.7.1 1 .1.4 0 .7 0 1-.1l2.1-.4h1.2l2.1.4c.3.1.7.1 1 .1v.6c-.4 0-.8 0-1.2-.1l-1.9-.4h-1l-2.1.4c-.4.1-.8.1-1.2.1-.4 0-.8 0-1.2-.1l-2-.4h-1l-2.1.4c-.4.1-.8.1-1.2.1v-.6c.4 0 .7 0 1-.1l2.1-.4z"/></svg>',
  styles: []
})
export class IconOevBT12Component {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
