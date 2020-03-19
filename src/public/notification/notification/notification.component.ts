import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  HostBinding,
  Input,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { IconDirective } from '@sbb-esta/angular-core/icon-directive';

export enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info'
}

export interface JumpMark {
  /** Title of an element in jump marks. */
  title: string;
  /** Identifier of an element in jump marks. */
  elementId?: string;
  callback?: (event$: any, jumpMark: JumpMark) => void;
}

@Component({
  selector: 'sbb-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent {
  /** @docs-private */
  @HostBinding('class.sbb-notification')
  baseCssClass = true;

  /** @docs-private */
  @HostBinding('class.sbb-notification-success')
  get typeSuccess(): boolean {
    return this.type === NotificationType.SUCCESS;
  }

  /** @docs-private */
  @HostBinding('class.sbb-notification-info')
  get typeInfo(): boolean {
    return this.type === NotificationType.INFO;
  }

  /** @docs-private */
  @HostBinding('class.sbb-notification-error')
  get typeError(): boolean {
    return this.type === NotificationType.ERROR;
  }
  /** Type of notification. */
  @Input()
  type: 'success' | 'info' | 'error' = NotificationType.SUCCESS;

  /** @docs-private */
  @ViewChild('error', { read: TemplateRef, static: true })
  errorIcon: TemplateRef<any>;

  /** @docs-private */
  @ViewChild('check', { read: TemplateRef, static: true })
  checkIcon: TemplateRef<any>;

  /** @docs-private */
  @ViewChild('info', { read: TemplateRef, static: true })
  infoIcon: TemplateRef<any>;

  /** The icon to be used into the notification left side.
   *  By default uses three icons for SUCCESS, ERROR or INFO notification type,
   *  but the user can use his own icon using the NotificationIconDirective.
   */
  @Input()
  set icon(notificationIcon: TemplateRef<any>) {
    this._icon = notificationIcon;
  }
  get icon() {
    if (this._contentIcon) {
      return this._contentIcon;
    } else if (this._icon) {
      return this._icon;
    }
    switch (this.type) {
      case NotificationType.SUCCESS:
        return this.checkIcon;
      case NotificationType.ERROR:
        return this.errorIcon;
      case NotificationType.INFO:
        return this.infoIcon;
      default:
        return null;
    }
  }
  private _icon: TemplateRef<any>;

  /**
   * icon placed in template
   * @docs-private
   */
  @ContentChild(IconDirective, { read: TemplateRef })
  _contentIcon: TemplateRef<any>;

  /** Message displayed into the notification content */
  @Input() message: string;

  /** List of in page links displayed on the bottom of the notification */
  @Input() jumpMarks?: JumpMark[];

  /** @docs-private */
  @HostBinding('class.sbb-notification-has-jump-marks')
  get hasJumpMarks() {
    return this.jumpMarks && this.jumpMarks.length;
  }

  /**
   * Used to scroll to an element identified by a jump mark
   *
   * @param $event click event
   * @param jumpMark jump mark after the notification message
   */
  scrollTo($event: any, jumpMark: JumpMark) {
    $event.preventDefault();
    if (jumpMark.elementId) {
      document.querySelector(jumpMark.elementId)?.scrollIntoView({ behavior: 'smooth' });
    }
    if (jumpMark.callback) {
      jumpMark.callback($event, jumpMark);
    }
  }
}
