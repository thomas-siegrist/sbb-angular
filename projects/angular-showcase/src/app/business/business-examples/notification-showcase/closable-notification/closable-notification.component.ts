import { Component } from '@angular/core';

@Component({
  selector: 'sbb-custom-icon-notification',
  templateUrl: './closable-notification.component.html',
  styleUrls: ['./closable-notification.component.scss']
})
export class ClosableNotificationComponent {
  dismissed() {
    console.log('Notification dismissed');
  }
}
