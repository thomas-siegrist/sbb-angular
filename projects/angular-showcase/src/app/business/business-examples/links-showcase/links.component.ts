import { Component } from '@angular/core';

@Component({
  selector: 'sbb-links-showcase',
  templateUrl: './links.component.html'
})
export class LinksComponent {
  linkMode = 'normal';
  linkIcon = 'arrow';
  modes = ['normal', 'form', 'stretch'];
  icons = ['arrow', 'download'];
}
