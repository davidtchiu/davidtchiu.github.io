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
  constructor(startDate, daysObj, format, elementID) {
    this.startDate = new Date(startDate);
    this.days = daysObj;
    this.format = format;
    this.elementID = elementID;
  }

  /**
   * Creates and updates the HTML element with the schedule table.
   */
  generateHTMLCalendar() {
    // table and thead
    let table = document.createElement("table");
    // let thead = document.createElement("thead");
    // let theadRow = document.createElement("tr");
    // let mon = document.createElement("th");
    // mon.innerHTML = "Mon";
    // theadRow.appendChild(mon);
    // let tue = document.createElement("th");
    // tue.innerHTML = "Tue";
    // theadRow.appendChild(tue);
    // let wed = document.createElement("th");
    // wed.innerHTML = "Wed";
    // theadRow.appendChild(wed);
    // let thu = document.createElement("th");
    // thu.innerHTML = "Thu";
    // theadRow.appendChild(thu);
    // let fri = document.createElement("th");
    // fri.innerHTML = "Fri";
    // theadRow.appendChild(fri);
    // thead.appendChild(theadRow);
    // table.appendChild(thead);

    let currentDate = this.startDate;
    while (this.days.lectures.length > 0) {
      let tr = document.createElement("tr");
      for (let dayCnt = 0; dayCnt < this.format.length; dayCnt++) {
        if (this.format[dayCnt] != OFF) {
          let td = document.createElement("td");
          td.innerHTML = `<center>${currentDate.getMonth()}/${currentDate.getDate()}/${currentDate.getFullYear()}<br/></center>`;

          // depending on whether the day is LAB, LEC, or OFF, pull
          // activity from the respective queue and add to the table
          if (this.format[dayCnt] == LAB) {
            td.innerHTML += `${this.days.labs.shift()}`;
          } else if (this.format[dayCnt] == LEC) {
            td.innerHTML += `${this.days.lectures.shift()}`;
          }
          tr.appendChild(td);
        }
        // next day
        currentDate.setDate(currentDate.getDate() + 1);
      }
      table.appendChild(tr);
    }

    // update the HTML element
    const div = document.querySelector("#schedule");
    div.appendChild(table);
  }
}
