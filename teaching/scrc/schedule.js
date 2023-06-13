let days = {
  resources: [
    // {
    //   name: "Course Syllabus",
    //   url: "syllabus"
    // },
    // {
    //   name: "Notes and Sample Code",
    //   url: "https://canvas.pugetsound.edu"
    // },
  ],
  assignments: {
    homework: [
      // {
      //   name: "Hwk 1 (written)",
      //   title: "The Relational Model",
      //   url: "hwk1.rel/",
      //   due: "9/11/2023",
      // },
      // {
      //   name: "Hwk 2 (written)",
      //   title: "Relational Algebra",
      //   url: "hwk2.ra/",
      //   due: "9/22/2023",
      // },
      // {
      //   name: "Hwk 3 (coding)",
      //   title: "Data Preparation",
      //   url: "hwk3.ddl/",
      //   due: "10/2/2023",
      // },
    
      // {
      //   name: "Hwk 4 (coding)",
      //   title: "Writing SQL Queries",
      //   url: "hwk4.dml/",
      //   due: "10/13/2023",
      // },
      // {
      //   name: "Hwk 5 (coding)",
      //   title: "Design Theory - Closure of FD Sets",
      //   url: "hwk5.closure/",
      //   due: "10/27/2023",
      // },
      // {
      //   name: "Hwk 6 (coding)",
      //   title: "Design Theory - BCNF Normalization",
      //   url: "hwk6.bcnf/",
      //   due: "11/10/2023",
      // },
      // {
      //   name: "Hwk 7 (coding)",
      //   title: "Joins!",
      //   url: "hwk7.joins/",
      //   due: "11/18/2021",
      // },
      // {
      //   name: "Hwk 7 (coding)",
      //   title: "B+Tree",
      //   url: "hwk7.btree/",
      //   due: "11/24/2021",
      // },
    ],

    ////////////////////////////// PROJECTS ///////////////////////////////
    // projects: [
      // {
      //   name: "Project Teams",
      //   title: "Team Preferences",
      //   url: "proj/",
      //   due: "10/28/2022",
      // },
      // {
      //   name: "Project Prop",
      //   title: "Project Proposal",
      //   url: "proj/",
      //   due: "11/4/2022",
      // },
      // {
      //   name: "Project Demo",
      //   title: "Project Demo",
      //   url: "proj/",
      //   due: "12/5/2022",
      // },
      // {
      //   name: "Project-Code",
      //   title: "Project Code",
      //   url: "proj/",
      //   due: "12/16/2022",
      // },
    // ],

    ////////////////////////////////// LABS ////////////////////////////////
    // labs: [
    //   {
    //     name: "Lab",
    //     title: "SQL Lab!",
    //     url: "lab.pplsoft/",
    //   },
    // ],
  },

  lectures: [
    // wk 1
    "<strong>Classes begin</strong>",
    "SCRC group meeting",
    "",
    "",
    "",
    // wk 2
    "<strong>Labor Day<br/>(no class)</strong>",
    "SCRC group meeting",
    "",
    "",
    "",
    // wk 3
    "Last day to drop classes without record",
    "SCRC group meeting",
    "",
    "",
    "",
    // wk 4
    "",
    "SCRC group meeting",
    "",
    "",
    "",
    // wk 5
    "",
    "SCRC group meeting",
    "",
    "",
    "",
    // wk 6
    "",
    "SCRC group meeting",
    "",
    "",
    "",
    // wk 7
    "",
    "SCRC group meeting",
    "",
    "",
    "",
    // wk 8
    "Fall break",
    "Fall break: No meeting",
    "",
    "",
    "",
    // wk 9
    "",
    "SCRC group meeting: Advising signup",
    "",
    "",
    "",
    // wk 10
    "Spring course registration",
    "Spring course registration<br/>SCRC group meeting",
    "Spring course registration",
    "Spring course registration",
    "Spring course registration",
    // wk 11
    "",
    "SCRC group meeting: Advising signup",
    "",
    "",
    "",
    // wk 12
    "",
    "SCRC group meeting: Advising signup",
    "",
    "",
    "",
    // wk 13
    "Open registration begins",
    "SCRC group meeting",
    "<strong>Thanksgiving break</strong>",
    "<strong>Thanksgiving break</strong>",
    "<strong>Thanksgiving break</strong>",
    // wk 14
    "",
    "SCRC group meeting: Advising signup",
    "",
    "",
    "",
    // wk 15
    "",
    "SCRC group meeting: Advising signup",
    "Last day of classes",
    "<strong>Reading Period</strong>",
    "<strong>Reading Period</strong>",
    // wk final
    "",
    "",
    "",
    "",
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("8/28/23", days, MTWRF);
schedule.generateHTMLResources();
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
