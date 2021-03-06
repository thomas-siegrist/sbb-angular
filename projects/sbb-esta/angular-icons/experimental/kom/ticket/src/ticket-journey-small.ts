/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTicketJourneySmall]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path
        fill="#000"
        d="M10.992 16.001v1.991h-5v-1.991h-1v.992H5v1h1.992v1h-2v-.992h-1v-1.008h-1v-1h2v-1h1v-1.497.497H4v1.008H2.992v-1.008h1v-1h1v-1.001h1v-.999h2v.999H9v1h.993v-.999h.999v-1.001h1v-1H13l1.001.001v2h-1.008V11H12v1h-.007v.993H13v1.001h.993v1H12v.999h1.993v1h-.999v1h-2.001v-1h.999v-.992h-1zm0-1.008h1v-2h-1v2zM6 12.992h1.992v-.999H6v.999zm-2.008-3H5V11H4v.993H2.992v-2h1zM4 19.993h1v1.008H3.992v-.007h-1v-2H4v.999zm7.992.008h-1v-1.008H8.993v-1h2v1H12v1h.993v-.999h1.008v2H13v.007h-1.008v-1zm-5-.008v-1H8v1h1.993v1h-2v-.992H7v1H5.992v-1.008h1zm1.001-9v-1h2v1h-2zm-.001 5.008v-1.008H9v1.008H7.992zm-1 .991h3v-3h-3v3z"
      />
      <svg:path
        stroke="#000"
        d="M17.5 8a1.5 1.5 0 11-3 .001 1.5 1.5 0 013 0zm-2.52 6.558l1.025 1.618 3.887-6.135c.362-.636.594-1.297.6-2.034a4.5 4.5 0 00-9 0c.014.347.068.669.156.974"
      />
    </svg:g>
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-ticket',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconTicketJourneySmall {}

@Component({
  selector: 'sbb-icon-ticket-journey-small',
  template: `
    <svg sbbIconTicketJourneySmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconTicketJourneySmall {}

@NgModule({
  declarations: [SvgIconTicketJourneySmall, IconTicketJourneySmall],
  exports: [SvgIconTicketJourneySmall, IconTicketJourneySmall]
})
export class IconTicketJourneySmallModule {}
