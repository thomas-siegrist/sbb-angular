/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaFa]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M4.56 1.037h7.702l-.48 2.2h-4.88l-.74 3.441h4.66l-.44 2.201h-4.68L4.42 15h-2.8zM15.781 9.599h4.32l-.88-6.081h-.08l-3.36 6.08zm2.341-8.562h3.1L23.762 15h-2.8l-.48-3.201h-5.94l-1.782 3.2h-3.1l8.462-13.962z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 25px;
        height: 16px;
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
    viewBox: '0 0 25 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconSaFa {}

@Component({
  selector: 'sbb-icon-sa-fa',
  template: `
    <svg sbbIconSaFa></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSaFa {}

@NgModule({
  declarations: [SvgIconSaFa, IconSaFa],
  exports: [SvgIconSaFa, IconSaFa]
})
export class IconSaFaModule {}
