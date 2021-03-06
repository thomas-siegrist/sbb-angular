/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-ticket-journey',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            fill="#000"
            d="M10.992 16.001v1.991h-5v-1.991h-1v.992H5v1h1.992v1h-2v-.992h-1v-1.008h-1v-1h2v-1h1v-1.497.497H4v1.008H2.992v-1.008h1v-1h1v-1.001h1v-.999h2v.999H9v1h.993v-.999h.999v-1.001h1v-1H13l1.001.001v2h-1.008V11H12v1h-.007v.993H13v1.001h.993v1H12v.999h1.993v1h-.999v1h-2.001v-1h.999v-.992h-1zm0-1.008h1v-2h-1v2zM6 12.992h1.992v-.999H6v.999zm-2.008-3H5V11H4v.993H2.992v-2h1zM4 19.993h1v1.008H3.992v-.007h-1v-2H4v.999zm7.992.008h-1v-1.008H8.993v-1h2v1H12v1h.993v-.999h1.008v2H13v.007h-1.008v-1zm-5-.008v-1H8v1h1.993v1h-2v-.992H7v1H5.992v-1.008h1zm1.001-9v-1h2v1h-2zm-.001 5.008v-1.008H9v1.008H7.992zm-1 .991h3v-3h-3v3z"
          />
          <path
            stroke="#000"
            d="M17.5 8a1.5 1.5 0 11-3 .001 1.5 1.5 0 013 0zm-2.52 6.558l1.025 1.618 3.887-6.135c.362-.636.594-1.297.6-2.034a4.5 4.5 0 00-9 0c.014.347.068.669.156.974"
          />
        </g>
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            fill="#000"
            d="M16.488 24.002v2.986h-7.5v-2.986h-1.5v1.488H7.5v1.5h2.988v1.5h-3v-1.488h-1.5V25.49h-1.5v-1.5h3v-1.5h1.5v-1.5H6v1.512H4.488V20.99h1.5v-1.5h1.5v-1.502h1.5V16.49h3v1.498H13.5v1.5h1.49V17.99h1.498v-1.502h1.5v-1.5H19.5v.002h1.502v3H19.49V16.5H18V18h-.01v1.49h1.51v1.501h1.49v1.5H18v1.498h2.99v1.5H19.49v1.5h-3.002v-1.5h1.499v-1.488h-1.5zm0-1.512h1.5V19.488h-1.5v3zM9 19.488h2.988V17.99H9v1.498zM5.988 14.99v-.002H7.5V16.5H6v1.49H4.488v-3h1.5zm.012 15h1.5v1.512H5.988v-.011h-1.5v-3H6v1.498zm11.988.012h-1.5V28.49H13.49v-1.5h3v1.5H18v1.5h1.49V28.49h1.512v3H19.5v.01h-1.512v-1.5zm-7.5-.012v-1.5H12v1.5h2.99v1.5h-3v-1.488H10.5v1.5H8.988V29.99h1.5zm1.502-13.5v-1.5h3v1.5h-3zm-.002 7.512V22.49H13.5v1.512h-1.512zm-1.5 1.486h4.5v-4.5h-4.5v4.5z"
          />
          <path
            stroke="#000"
            d="M26.249 12.001a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-3.78 9.836l1.538 2.427 5.83-9.202c.543-.954.891-1.946.902-3.051a6.75 6.75 0 00-13.5 0c.02.52.1 1.003.232 1.46"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconTicketJourneyComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconTicketJourneyComponent],
  exports: [IconTicketJourneyComponent]
})
export class IconTicketJourneyModule {}
