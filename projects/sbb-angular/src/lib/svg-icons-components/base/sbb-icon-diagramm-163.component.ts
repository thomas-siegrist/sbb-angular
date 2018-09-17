import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-diagramm-163',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 20.5h19m-19-.3h19v.5H3zM3 15v4h4v-4H3zm3 3H4v-2h2v2zM8 7v12h4V7H8zm3 11H9V8h2v10zm2-9v10h4V9h-4zm3 9h-2v-8h2v8zm2-14v15h4V4h-4zm3 14h-2V5h2v13z"/></svg>',
  styles: []
})
export class IconDiagramm163Component {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
