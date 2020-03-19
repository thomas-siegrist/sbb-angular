import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { IconDirective } from '@sbb-esta/angular-core/icon-directive';

export enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARN = 'warn'
}

export enum NotificationToastPosition {
  TOPLEFT = 'top-left',
  TOPRIGHT = 'top-right',
  BOTTOMLEFT = 'bottom-left',
  BOTTOMRIGHT = 'bottom-right'
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

  /** @docs-private */
  @HostBinding('class.sbb-notification-warn')
  get typeWarn(): boolean {
    return this.type === NotificationType.WARN;
  }

  /** @docs-private */
  @HostBinding('class.sbb-notification-toast-top-left')
  get positionTopLeft(): boolean {
    return this.toastPosition === NotificationToastPosition.TOPLEFT;
  }

  /** @docs-private */
  @HostBinding('class.sbb-notification-toast-top-right')
  get positionTopRight(): boolean {
    return this.toastPosition === NotificationToastPosition.TOPRIGHT;
  }

  /** @docs-private */
  @HostBinding('class.sbb-notification-toast-bottom-left')
  get positionBottomLeft(): boolean {
    return this.toastPosition === NotificationToastPosition.BOTTOMLEFT;
  }

  /** @docs-private */
  @HostBinding('class.sbb-notification-toast-bottom-right')
  get positionBottomRight(): boolean {
    return this.toastPosition === NotificationToastPosition.BOTTOMRIGHT;
  }

  @HostBinding('attr.aria-hidden') ariaHidden: 'false' | 'true';

  @HostBinding('hidden')
  get hidden() {
    return this.ariaHidden === 'true';
  }

  /** Type of notification. */
  @Input()
  type: 'success' | 'info' | 'error' | 'warn' = NotificationType.SUCCESS;

  /** Type of notification. */
  @Input()
  toastPosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

  /** Type of notification. */
  @Input()
  set readonly(value: boolean) {
    this._readonly = coerceBooleanProperty(value);
    this._changeDetectorRef.markForCheck();
  }

  get readonly() {
    return this._readonly;
  }

  private _readonly = false;

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
      case NotificationType.WARN:
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

  /** List of in page links displayed on the bottom of the notification */
  @Input() jumpMarks?: JumpMark[];

  @Output()
  dismissed: EventEmitter<boolean> = new EventEmitter();

  /** @docs-private */
  @HostBinding('class.sbb-notification-has-jump-marks')
  get hasJumpMarks() {
    return this.jumpMarks && this.jumpMarks.length;
  }

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

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

  dismiss() {
    this.ariaHidden = 'true';
    this.dismissed.emit(false);
  }
}
