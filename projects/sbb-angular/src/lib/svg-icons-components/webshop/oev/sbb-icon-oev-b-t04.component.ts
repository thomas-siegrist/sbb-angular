import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-oev-b-t04',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.683 3.481a.288.288 0 1 1 .408-.408l3.237 3.237h2.574c.461 0 .869.301 1.004.742l1.58 5.176a.509.509 0 0 1 .021.145v2.258a.313.313 0 0 1-.312.312H2.493v-3.691h3.034a.314.314 0 0 0 .313-.312V7.186a.313.313 0 0 0-.313-.313H2.493V6.31h9.019L8.683 3.481zm5.698 8.71c0 .172.141.311.312.311h1.85a.312.312 0 0 0 .314-.311.314.314 0 0 0-.016-.094L15.33 7.143a.467.467 0 0 0-.449-.333h-.031c-.26 0-.469.21-.469.469v4.912zm-1.518-.095a.47.47 0 1 0 .938 0V7.28a.468.468 0 1 0-.938 0v4.816zm-2.079-4.91a.313.313 0 0 0-.313-.313H6.716a.313.313 0 0 0-.313.313v3.754c0 .171.14.312.313.312h3.754a.314.314 0 0 0 .313-.312l.001-3.754zm.562.094v4.816a.47.47 0 0 0 .938 0V7.28a.468.468 0 1 0-.938 0z"/></svg>',
  styles: []
})
export class IconOevBT04Component {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
