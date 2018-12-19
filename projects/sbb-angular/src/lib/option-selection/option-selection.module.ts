import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from '../radio-button/radio-button.module';
import { OptionSelectionComponent } from './option-selection/option-selection.component';
import { OptionSelectionImageDirective } from './option-selection/option-selection-image.directive';

@NgModule({

  imports: [
    CommonModule,
    RadioButtonModule
  ],
  declarations: [
    OptionSelectionComponent,
    OptionSelectionImageDirective
  ],
  exports: [
    OptionSelectionComponent,
    OptionSelectionImageDirective
  ]
})
export class OptionSelectionModule { }
