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
const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

class CourseCalendar {
  constructor(startDate, daysObj, format, elementID) {
    this.startDate = new Date(startDate);
    this.days = daysObj;
    this.format = format;
    this.elementID = elementID;
    this.today = new Date();
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
        th.innerHTML = `${dayLabels[dayCnt]}`;
        theadRow.appendChild(th);
      }
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

          // Is it today? Highlight the background differently
          if (
            currentDate.getMonth() == this.today.getMonth() &&
            currentDate.getDate() == this.today.getDate() &&
            currentDate.getFullYear() == this.today.getFullYear()
          ) {
            td.style.backgroundColor = "#0f79d0";
            td.style.color = "#f2f2f2";
          }

          td.innerHTML = `<strong>${dayLabels[(currentDate.getDay() + 6) % 7]}
          ${
            currentDate.getMonth() + 1
          }/${currentDate.getDate()}/${currentDate.getFullYear()}</strong><br/>`;

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
