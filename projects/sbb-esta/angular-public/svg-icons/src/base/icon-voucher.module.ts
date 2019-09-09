/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@Component({
  selector: 'sbb-icon-voucher',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.7 8c-.2-3-1.9-3.5-3.5-3.5S9 5 8.7 8H6.4L5.2 20h13.9L18 8h-2.3zm-3.5-2.3c1 0 2.1.3 2.3 2.3H9.9c.2-2 1.3-2.3 2.3-2.3zm-2.3 5.7c-.7 0-1.2-.5-1.2-1.2S9.2 9 9.9 9s1.2.5 1.2 1.2c-.1.8-.5 1.2-1.2 1.2zm4.6 0c-.7 0-1.2-.5-1.2-1.2S13.8 9 14.5 9s1.2.5 1.2 1.2c0 .8-.5 1.2-1.2 1.2z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconVoucherComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@NgModule({
  declarations: [IconVoucherComponent],
  exports: [IconVoucherComponent]
})
export class IconVoucherModule {}