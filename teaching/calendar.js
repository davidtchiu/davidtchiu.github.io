/**
 * David's semester calendar generator
 */
const WKD = -2;
const OFF = -1;
const LEC = 0;
const TR = [OFF, LEC, OFF, LEC, OFF, WKD, WKD];
const MWF = [LEC, OFF, LEC, OFF, LEC, WKD, WKD];
const MWRF = [LEC, OFF, LEC, LEC, LEC, WKD, WKD];
const MTWF = [LEC, LEC, LEC, OFF, LEC, WKD, WKD];
const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const DUE_COLOR = {
  labs: "#800080",
  homework: "#009926",
  projects: "#a61717",
};
const TODAY_COLOR = "#f2f2f2";
const TODAY_BG_COLOR = "#0f79d0";
const NOTTODAY_BG_COLOR = "#555555";

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
    const div = document.querySelector("#schedule");

    for (let assignType of Object.keys(this.days.assignments)) {
      let ul = document.createElement("ul");
      for (let assign of this.days.assignments[assignType]) {
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
      let h3 = document.createElement("h3");
      h3.innerHTML = assignType.toUpperCase();
      div.appendChild(h3);
      div.appendChild(ul);
    }
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
        th.style.textAlign = "center";=
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
          td.style.margin = "1px";
          td.style.padding = "1px";

          // Is it today? Highlight the background differently
          let dateHeader = document.createElement("div");
          if (this.sameDay(currentDate, this.today)) {
            dateHeader.style.backgroundColor = TODAY_BG_COLOR;
          } else {
            dateHeader.style.backgroundColor = NOTTODAY_BG_COLOR;
          }
          dateHeader.style.color = TODAY_COLOR;
          dateHeader.style.textAlign = "center";
          dateHeader.style.fontWeight = "bold";
          dateHeader.innerHTML = `${
            currentDate.getMonth() + 1
          }/${currentDate.getDate()}`;

          // any assignments due on current day?
          let dayContent = document.createElement("p");
          for (let assignmentType of Object.keys(this.days.assignments)) {
            for (let assign of this.days.assignments[assignmentType]) {
              if (this.sameDay(new Date(assign.due), currentDate)) {
                dayContent.innerHTML += `<span style='color: ${DUE_COLOR[assignmentType]}'>${assign.name} due</span><br/>`;
              }
            }
          }

          // depending on whether the day is LEC, WKD, or OFF, pull
          // activity from the respective queue and add to the table
          if (this.format[dayCnt] == LEC) {
            dayContent.innerHTML += `${this.days.lectures.shift()}`;
          }
          td.appendChild(dateHeader);
          td.appendChild(dayContent);
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
    h3.innerHTML = "SCHEDULE";
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
