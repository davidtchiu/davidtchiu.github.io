/**
 * David's semester calendar generator
 */

//////////////////////// constants ////////////////////////////
const LEC = 0;
const WKD = 2;
const OFF = 1;
const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

//////////////////////// configuration constants ////////////////////////////
const TR = [OFF, LEC, OFF, LEC, OFF, WKD, WKD];
const MWF = [LEC, OFF, LEC, OFF, LEC, WKD, WKD];
const MRF = [LEC, OFF, OFF, LEC, LEC, WKD, WKD];
const MWRF = [LEC, OFF, LEC, LEC, LEC, WKD, WKD];
const MTWF = [LEC, LEC, LEC, OFF, LEC, WKD, WKD];
const MTWRF = [LEC, LEC, LEC, LEC, LEC, WKD, WKD];

const ASSIGNMENT_COLOR = {
  // labs: "#330099",
  // labs: "#0e84b5",
  // homework: "#0e84b5",
  // projects: "#0e84b5",
  labs: "#d14",
  tutorials: "#d14",
  homework: "#d14",
  projects: "#d14",
};
const TODAY_COLOR = "#f2f2f2";
const TODAY_BG_COLOR = "#d14";
const NOTTODAY_BG_COLOR = "#494949";
const PAST_CONTENT_BG_COLOR = "rgba(215, 215, 215, 0.8)";

/**
 * This class can be used to generated an HTML course calendar.
 */
class CourseCalendar {
  /**
   *
   * @param {string} startDate Start date of the semester in "mm/dd/yyyy"
   * @param {object} daysObj
   * @param {array} format
   * @param {string} elementID HTML div element ID to update the calendar
   */
  constructor(startDate, daysObj, format, elementID) {
    this.startDate = new Date(startDate);
    this.days = daysObj;
    this.format = format;
    this.elementID = elementID;
    this.today = new Date();
  }

  /**
   * Creates and updates HTML element with list of resources
   */
  generateHTMLResources() {
    const div = document.querySelector("#schedule");

    if (this.days.resources.length > 0) {
      let ul = document.createElement("ul");
      for (let res of this.days.resources) {
        let li = document.createElement("li");
        let anchor = document.createElement("a");
        anchor.href = res.url;
        anchor.innerHTML = `${res.name}`;
        li.appendChild(anchor);
        ul.appendChild(li);
      }

      // update the HTML element
      let h3 = document.createElement("h3");
      h3.innerHTML = "Class Resources"; // section label here
      div.appendChild(h3);
      div.appendChild(ul);
    }
  }

  /**
   * Creates and updates HTML element with list of assignments
   */
  generateHTMLAssigments() {
    const div = document.querySelector("#schedule");

    for (let assignType of Object.keys(this.days.assignments)) {
      if (this.days.assignments[assignType].length > 0) {
        let ul = document.createElement("ul");
        for (let assign of this.days.assignments[assignType]) {
          let li = document.createElement("li");
          let anchor = document.createElement("a");
          anchor.style.color = ASSIGNMENT_COLOR[assignType];
          anchor.href = assign.url;
          anchor.innerHTML = `${assign.name}: ${assign.title}`;
          li.appendChild(anchor);
          if (assign.due) {
            let due = document.createTextNode(` (due ${assign.due})`);
            li.appendChild(due);
          }
          ul.appendChild(li);
        }

        // update the HTML element
        let h3 = document.createElement("h3");
        h3.innerHTML = assignType.charAt(0).toUpperCase() + 
          assignType.slice(1); // section label here
        div.appendChild(h3);
        div.appendChild(ul);
      }
    }
  }

  /**
   * Creates and updates the HTML element with the schedule table.
   */
  generateHTMLCalendar() {
    // table and thead
    let table = document.createElement("table");

    // week header
    let thead = document.createElement("thead");
    let theadRow = document.createElement("tr");
    let wkHead = document.createElement("th");
    wkHead.innerHTML = "Wk";
    theadRow.appendChild(wkHead);
    // days of the week
    for (let dayCnt = 0; dayCnt < this.format.length; dayCnt++) {
      if (this.format[dayCnt] != WKD) {
        let th = document.createElement("th");
        th.style.textAlign = "center";
        th.innerHTML = `${dayLabels[dayCnt]}`;
        theadRow.appendChild(th);
      }
    }
    theadRow.appendChild(document.createElement("th")); // resources
    thead.appendChild(theadRow);
    table.appendChild(thead);

    //actual content starts here
    let currentDate = this.startDate;
    let weekNum = 1;

    while (this.days.lectures.length > 0) {
      let tr = document.createElement("tr");

      // associate week number
      let wk = document.createElement("td");
      wk.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
      wk.innerHTML = weekNum;
      tr.appendChild(wk);

      // days of the week
      for (let dayCnt = 0; dayCnt < this.format.length; dayCnt++) {
        if (this.format[dayCnt] != WKD) {
          let td = document.createElement("td");
          td.style.width = "20%";
          td.style.margin = "1px";
          td.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
          // td.style.padding = "1px";

          // Is it today? Highlight the background differently
          let dateHeader = document.createElement("div");
          let dateCmp = this.compareDay(currentDate, this.today);
          if (dateCmp == 0) {
            dateHeader.style.backgroundColor = TODAY_BG_COLOR;
          } else {
            dateHeader.style.backgroundColor = NOTTODAY_BG_COLOR;
            if (dateCmp < 0) {
             td.style.backgroundColor = PAST_CONTENT_BG_COLOR;
            }
          }
          dateHeader.style.color = TODAY_COLOR;
          dateHeader.style.textAlign = "center";
          dateHeader.style.fontWeight = "bold";
          dateHeader.innerHTML = `${
            currentDate.getMonth() + 1
          }/${currentDate.getDate()}`;

          // construct the day content block
          let dayContent = document.createElement("p");
          dayContent.style.fontSize = "80%";

          // any assignments due on current day?
          for (let assignmentType of Object.keys(this.days.assignments)) {
            for (let assign of this.days.assignments[assignmentType]) {
              if (this.sameDay(new Date(assign.due), currentDate)) {
                dayContent.innerHTML += `<a href="${assign.url}"><emph><span style='color: ${ASSIGNMENT_COLOR[assignmentType]}'>${assign.name} due</span></emph></a><br/>`;
              }
            }
          }

          // depending on whether the day is LEC, WKD, or OFF, pull
          // activity from the respective queue and add to the table
          if (this.format[dayCnt] == LEC) {
            const lecture = `${this.days.lectures.shift()}`;
            if (lecture == null || lecture.trim() === "") {
              dayContent.innerHTML += "&nbsp;".repeat(8);
            } else {
              dayContent.innerHTML += lecture;
            }
          }

          
          td.appendChild(dateHeader);
          td.appendChild(dayContent);
          tr.appendChild(td);
        }
        // next day
        currentDate.setDate(currentDate.getDate() + 1);
      }

      // the week's course resources
      let td = document.createElement("td");
      td.style.margin = "1px";
      td.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
      let dayContent = document.createElement("p");
      dayContent.style.fontSize = "80%";
      dayContent.style.whiteSpace = "nowrap";
      dayContent.innerHTML += `${this.days.lectures.shift()}`;
      td.appendChild(dayContent);
      tr.appendChild(td);

      // done with a week/row
      table.appendChild(tr);
      weekNum++;
    }

    // update the HTML element
    const div = document.querySelector("#schedule");
    let h3 = document.createElement("h3");
    h3.innerHTML = "Calendar (Tentative)";
    div.appendChild(h3);
    div.appendChild(table);
  }

  /**
   * Tests if two dates are the same
   * @param {Date} day1
   * @param {Date} day2
   * @returns {boolean} true if the two dates are of the same mm/dd/yyyy
   */
  sameDay(day1, day2) {
    return this.compareDay(day1,day2) === 0;
  }

  compareDay(day1, day2) {
    const d1 = new Date(day1.getFullYear(), day1.getMonth(), day1.getDate());
    const d2 = new Date(day2.getFullYear(), day2.getMonth(), day2.getDate());

    const MS_PER_DAY = 24 * 60 * 60 * 1000;
    return Math.round((d1 - d2) / MS_PER_DAY);
    }

}
