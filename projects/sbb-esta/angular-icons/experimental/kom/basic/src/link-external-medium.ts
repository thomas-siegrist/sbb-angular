/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconLinkExternalMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M29.25 6.749l-6.75 6.75m1.5-6.75h5.25v5.25m-9.75-.749H6.75v18h18V16.5"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 36px;
        height: 36px;
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
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconLinkExternalMedium {}

@Component({
  selector: 'sbb-icon-link-external-medium',
  template: `
    <svg sbbIconLinkExternalMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconLinkExternalMedium {}

@NgModule({
  declarations: [SvgIconLinkExternalMedium, IconLinkExternalMedium],
  exports: [SvgIconLinkExternalMedium, IconLinkExternalMedium]
})
export class IconLinkExternalMediumModule {}
