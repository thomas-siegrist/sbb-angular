import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter } from '@sbb-esta/angular-core/datetime';

@Component({
  selector: 'sbb-datepicker-showcase',
  templateUrl: './datepicker-showcase.component.html',
  styleUrls: ['./datepicker-showcase.component.css']
})
export class DatepickerShowcaseComponent {
  today = new Date();

  minDate: Date;
  maxDate: Date;

  laData = new FormControl(this.today);
  twoDatepickersForm = new FormGroup({
    firstDatepicker: new FormControl(),
    secondDatepicker: new FormControl()
  });
  dateWithFilter = new FormControl();
  standaloneDate = new FormControl();

  toggle = true;
  arrows = false;
  disabled = false;

  constructor(dateAdapter: DateAdapter<Date>) {
    this.minDate = dateAdapter.addCalendarMonths(dateAdapter.today(), -6);
    this.maxDate = dateAdapter.addCalendarMonths(dateAdapter.today(), 6);
  }

  async onDisabled() {
    // Wait a tick to ensure this.disabled is updated
    await Promise.resolve();
    if (this.disabled) {
      this.laData.disable();
    } else {
      this.laData.enable();
    }
  }

  closedEvent() {
    console.log('CLOSED');
  }

  openedEvent() {
    console.log('OPENED');
  }

  dateChangeEvent($event: any) {
    console.log('DATE_CHANGED', $event);
  }

  dateInputEvent($event: any) {
    console.log('DATE_INPUT', $event);
  }

  filterDates = (date: Date | null): boolean => {
    return !!date && date.getDate() === 1;
  };
}
