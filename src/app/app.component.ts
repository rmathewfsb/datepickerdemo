import { IDatePickerConfig } from 'ng2-date-picker';
import { ECalendarValue } from 'ng2-date-picker';
import { Component } from '@angular/core';
import {Moment} from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Datepicker Demo';
  date: Moment;
  config: IDatePickerConfig = {
    firstDayOfWeek: 'mo',
    monthFormat: 'MMM, YYYY',
    disableKeypress: false,
    allowMultiSelect: false,
    closeOnSelect: undefined,
    closeOnSelectDelay: 100,
    openOnFocus: true,
    openOnClick: true,
    onOpenDelay: 0,
    weekDayFormat: 'ddd',
    appendTo: document.body,
    drops: 'down',
    opens: 'right',
    showNearMonthDays: true,
    showWeekNumbers: false,
    enableMonthSelector: true,
    yearFormat: 'YYYY',
    showGoToCurrent: true,
    dayBtnFormat: 'DD',
    monthBtnFormat: 'MMM',
    hours12Format: 'hh',
    hours24Format: 'HH',
    meridiemFormat: 'A',
    minutesFormat: 'mm',
    minutesInterval: 1,
    secondsFormat: 'ss',
    secondsInterval: 1,
    showSeconds: false,
    showTwentyFourHours: false,
    timeSeparator: ':',
    multipleYearsNavigateBy: 10,
    showMultipleYearsNavigation: false,
    locale: 'en',
    hideInputContainer: false,
    returnedValueType: ECalendarValue.String
  };


  constructor() {

  }
}
