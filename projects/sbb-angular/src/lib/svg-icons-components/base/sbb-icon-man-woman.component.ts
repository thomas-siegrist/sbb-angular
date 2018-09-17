import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-man-woman',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 30"><g fill-rule="evenodd"><path d="M5.497 1c-.827 0-1.5.673-1.5 1.5S4.67 4 5.497 4s1.5-.673 1.5-1.5S6.324 1 5.497 1zm0 4a2.503 2.503 0 0 1-2.5-2.5c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5S6.875 5 5.497 5zM2.074 7L.004 19.418l.987.164L2.92 8h5.153l1.93 11.582.987-.164L8.92 7H2.074z"/><path d="M2.05 27l.9-8.999h5.095l.9 8.999H2.05zm6.9-9.999H2.045L.945 28h2.052v1.999h1V28h3v1.999h1V28h2.053l-1.1-10.999zM17.498 1c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm0 4c1.379 0 2.5-1.122 2.5-2.5S18.877 0 17.498 0a2.503 2.503 0 0 0-2.5 2.5c0 1.378 1.122 2.5 2.5 2.5zm-3.5 12.001h7V8h-7v9.001zm-1 2.499h1v-1.499h1v11.998h1V18.001h3v11.998h1V18.001h1V19.5h1V7h-9v12.5z"/></g></svg>',
  styles: []
})
export class IconManWomanComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
