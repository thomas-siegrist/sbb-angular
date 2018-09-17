import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-environmentcalculator-time',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12zm0-22.5c-5.85 0-10.5 4.65-10.5 10.5S18.15 34.5 24 34.5 34.5 29.85 34.5 24 29.85 13.5 24 13.5zM31.5 24H24v-7.5h-1.5v9h9V24z"/></svg>',
  styles: []
})
export class IconEnvironmentcalculatorTimeComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
