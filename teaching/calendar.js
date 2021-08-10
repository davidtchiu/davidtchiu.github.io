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

    // header
    let thead = document.createElement("thead");
    let theadRow = document.createElement("tr");
    let wkHead = document.createElement("th");
    wkHead.innerHTML = "Week";
    theadRow.appendChild(wkHead);
    for (let dayCnt = 0; dayCnt < this.format.length; dayCnt++) {
      if (this.format[dayCnt] != OFF) {
        let th = document.createElement("th");
        switch (dayCnt) {
          case 0:
            th.innerHTML = `<center>Mon</center>`;
            break;
          case 1:
            th.innerHTML = `<center>Tue</center>`;
            break;
          case 2:
            th.innerHTML = `<center>Wed</center>`;
            break;
          case 3:
            th.innerHTML = `<center>Thu</center>`;
            break;
          case 4:
            th.innerHTML = `<center>Fri</center>`;
            break;
        }
      }
      theadRow.appendChild(th);
    }
    table.appendChild(theadRow);

    //actual content starts here
    let currentDate = this.startDate;
    let weekNum = 1;
    while (this.days.lectures.length > 0) {
      let tr = document.createElement("tr");

      // associate week number
      let wk = document.createElement("td");
      wk.innerHTML = weekNum;
      tr.appendChild(wk);

      // work on days of the week
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
      weekNum++;
    }

    // update the HTML element
    const div = document.querySelector("#schedule");
    div.appendChild(table);
  }
}
