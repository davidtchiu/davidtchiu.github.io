/**
 * David's semester calendar generator
 */
const WKD = -2;
const OFF = -1;
const LAB = 1;
const LEC = 0;
const TR = [OFF, LEC, OFF, LEC, OFF, WKD, WKD];
const MWF = [LEC, OFF, LEC, OFF, LEC, WKD, WKD];
const MWRF = [LEC, OFF, LEC, LAB, LEC, WKD, WKD];
const MTWF = [LEC, LAB, LEC, OFF, LEC, WKD, WKD];
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
   * Creates and updates HTML element with list of assignments
   */
  generateHTMLAssigments() {
    let ul = document.createElement("ul");
    for (let assign of this.days.assignments) {
      let li = document.createElement("li");
      let anchor = document.createElement("a");
      anchor.href = assign.url;
      anchor.innerHTML = `${assign.name}: ${assign.title}`;
      let due = document.createTextNode(` (due ${assign.due})`);
      li.appendChild(anchor);
      li.appendChild(due);
      ul.appendChild(li);
    }

    // update the HTML element
    const div = document.querySelector("#schedule");
    let h3 = document.createElement("h3");
    h3.innerHTML = "Assignments";
    div.appendChild(h3);
    div.appendChild(ul);
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
    wkHead.innerHTML = "Wk";
    theadRow.appendChild(wkHead);
    for (let dayCnt = 0; dayCnt < this.format.length; dayCnt++) {
      if (this.format[dayCnt] != WKD) {
        let th = document.createElement("th");
        th.innerHTML = `${dayLabels[dayCnt]}`;
        theadRow.appendChild(th);
      }
    }
    thead.appendChild(theadRow);
    table.appendChild(thead);

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
        if (this.format[dayCnt] != WKD) {
          let td = document.createElement("td");
          td.style.width = "20%";
          // Is it today? Highlight the background differently
          if (this.sameDay(currentDate, this.today)) {
            td.style.backgroundColor = "#0f79d0";
            td.style.color = "#f2f2f2";
          }

          // output the date
          td.innerHTML = `<strong>${
            currentDate.getMonth() + 1
          }/${currentDate.getDate()}</strong><br/>`;

          // any assignments due today?
          for (let assign of this.days.assignments) {
            if (this.sameDay(new Date(assign.due), currentDate)) {
              td.innerHTML += `<span style='color: #000080">${assign.name} due</span><br/><br/>`;
            }
          }

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
    let h3 = document.createElement("h3");
    h3.innerHTML = "Tentative Schedule";
    div.appendChild(h3);
    div.appendChild(table);
  }

  sameDay(day1, day2) {
    return (
      day1.getMonth() == day2.getMonth() &&
      day1.getDate() == day2.getDate() &&
      day1.getFullYear() == day2.getFullYear()
    );
  }
}
