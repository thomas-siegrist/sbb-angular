import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-environmentcalculator-co2',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M28.603 12a8.258 8.258 0 0 0-7.509 4.726 5.86 5.86 0 0 0-3.477-1.138 5.91 5.91 0 0 0-5.904 5.903c0 .429.047.852.14 1.264A6.282 6.282 0 0 0 7 28.865c0 3.286 2.825 6.108 6.213 6.259v.012h22.13a6.277 6.277 0 0 0 6.271-6.271 6.28 6.28 0 0 0-5.04-6.15 8.215 8.215 0 0 0 .354-2.39c0-4.59-3.735-8.325-8.325-8.325m0 1.5a6.825 6.825 0 0 1 6.825 6.825 6.773 6.773 0 0 1-1.263 3.932c.38-.096.77-.164 1.178-.164a4.771 4.771 0 1 1 0 9.543h-22.13l.227-.006c-2.607-.032-4.94-2.15-4.94-4.766a4.771 4.771 0 0 1 4.771-4.771c.303 0 .596.035.882.088a4.364 4.364 0 0 1-.94-2.69 4.403 4.403 0 0 1 4.404-4.403c1.966 0 3.612 1.298 4.177 3.078.086-3.695 3.093-6.666 6.809-6.666"/></svg>',
  styles: []
})
export class IconEnvironmentcalculatorCo2Component {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
