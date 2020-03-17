import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ProcessflowStepBase } from '@sbb-esta/angular-core/base';

@Component({
  selector: 'sbb-processflow-step',
  templateUrl: './processflow-step.component.html',
  styleUrls: ['./processflow-step.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessflowStepComponent extends ProcessflowStepBase {
  constructor(changeDetectorRef: ChangeDetectorRef) {
    super(changeDetectorRef);
  }
}