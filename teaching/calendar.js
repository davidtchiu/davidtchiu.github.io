/**
 * David's semester calendar generator
 */
const OFF = -1;
const LAB = 1;
const LEC = 0;
const TR = [OFF, LEC, OFF, LEC, OFF, OFF, OFF];
const MWF = [LEC, OFF, LEC, OFF, LEC, OFF, OFF];
const MWRF = [LEC, OFF, LEC, LAB, LEC, OFF, OFF];
const MTWF = [LEC, LAB, LEC, OFF, LEC, OFF, OFF];

class CourseCalendar {
  constructor(startDate, daysObj, format) {
    this.startDate = new Date(startDate);
    this.days = daysObj;
    this.format = format;
  }

  print() {
    let currentDate = this.startDate;
    while (this.days.lectures.length > 0) {
      for (let dayCnt = 0; dayCnt < this.format.length; dayCnt++) {
        if (this.format[dayCnt] == LAB) {
          console.log(
            `${currentDate.toDateString()} ${this.days.labs.shift()}`
          );
        } else if (this.format[dayCnt] == LEC) {
          console.log(
            `${currentDate.toDateString()} ${this.days.lectures.shift()}`
          );
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }
  }
}
