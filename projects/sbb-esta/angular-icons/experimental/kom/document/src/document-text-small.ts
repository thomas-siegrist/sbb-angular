/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconDocumentTextSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M6.502 4.496h6l5 5v10h-11v-15zm6 0v5h5M9 12.5h6m-6.002 2H15m-6 2h6"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 24px;
        height: 24px;
      }
      :host-context(.sbb-icon-inherit-color) [fill]:not([fill='none']) {
        fill: currentColor;
      }
      :host-context(.sbb-icon-inherit-color) [stroke]:not([stroke='none']) {
        stroke: currentColor;
      }
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-document',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconDocumentTextSmall {}

@Component({
  selector: 'sbb-icon-document-text-small',
  template: `
    <svg sbbIconDocumentTextSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconDocumentTextSmall {}

@NgModule({
  declarations: [SvgIconDocumentTextSmall, IconDocumentTextSmall],
  exports: [SvgIconDocumentTextSmall, IconDocumentTextSmall]
})
export class IconDocumentTextSmallModule {}
