import { Component } from '@angular/core';

@Component({
  selector: 'sbb-tooltip-showcase',
  templateUrl: './tooltip-showcase.component.html',
  styleUrls: ['./tooltip-showcase.component.css']
})
export class TooltipShowcaseComponent {
  tooltipContent = 'Tooltip-Inhalt';
  hoverCloseDelay = 0;
  hoverOpenDelay = 0;

  onOpen($event: any) {
    console.log('opened', $event);
  }

  onClose($event: any) {
    console.log('closed', $event);
  }
}
