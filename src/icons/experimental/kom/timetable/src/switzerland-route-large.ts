/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSwitzerlandRouteLarge]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M20 29.5a1.5 1.5 0 10-3.001 0 1.5 1.5 0 003.001 0zm10-10.49a1.5 1.5 0 10-3.001 0 1.5 1.5 0 003.001 0zm-10.441 9.432l7.884-8.374m-.705-8.893l-2.044 2.638-7.595 2.07-1.492-.807-4.925 3.657 2.228.764-5.859 6.497-2.179 7.978 4.317-1.097 1.906-1.113 4.515 4.323 6.37-.717 3.67-3.971 4.346 6.008 3.173-6.736 7.392 1.932-.466-4.042 3.113.079-.319-6.596-2.709-2.069-.88 1.668-3.583-1.081 1.338-3.987-7.499-2.911-2.818-2.487z"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 48px;
        height: 48px;
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
    viewBox: '0 0 48 48',
    class: 'sbb-icon sbb-icon-kom sbb-icon-timetable',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconSwitzerlandRouteLarge {}

@Component({
  selector: 'sbb-icon-switzerland-route-large',
  template: `
    <svg sbbIconSwitzerlandRouteLarge></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSwitzerlandRouteLarge {}

@NgModule({
  declarations: [SvgIconSwitzerlandRouteLarge, IconSwitzerlandRouteLarge],
  exports: [SvgIconSwitzerlandRouteLarge, IconSwitzerlandRouteLarge]
})
export class IconSwitzerlandRouteLargeModule {}