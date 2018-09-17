import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-realtime-alternative',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.988 2.5h-1.875v10.396H7.227l2.155-2.156-1.326-1.325-4.42 4.421 4.42 4.422 1.326-1.326-2.16-2.16h5.766"/></svg>',
  styles: []
})
export class IconRealtimeAlternativeComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
