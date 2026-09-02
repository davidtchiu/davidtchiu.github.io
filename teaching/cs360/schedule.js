let days = {
  resources: [
    {
      name: "Course Syllabus",
      url: "syllabus"
    },
  ],
  assignments: {
    homework: [
      {
        name: "Hwk 1 (written)",
        title: "The Relational Model",
        url: "hwk1.rel/",
        due: "9/11/2026", // wk2, friday
      },
      // {
      //   name: "Hwk 2 (written)",
      //   title: "Relational Algebra",
      //   url: "hwk2.ra/",
      //   due: "9/25/2026", // wk4, Wed
      // },
      // {
      //   name: "Hwk 3 (sql schema)",
      //   title: "Data Ingestion",
      //   url: "hwk3.sqlddl/",
      //   due: "10/2/2026",  // wk5, Friday
      // },
      // {
      //   name: "Hwk 4 (sql)",
      //   title: "Writing SQL Queries",
      //   url: "hwk4.sqldml/",
      //   due: "10/12/2026",  // wk 7, Monday
      // },
      // {
      //   name: "Hwk 5 (coding)",
      //   title: "F+: The FD Set Closure",
      //   url: "hwk5.closure/",
      //   due: "10/23/2026",  // wk 8, Fri
      // },
      // {
      //   name: "Hwk 6 (coding)",
      //   title: "BCNF Normalization",
      //   url: "hwk6.bcnf/",
      //   due: "11/4/2026", // wk 10, Wed
      // },
      // {
      //   name: "Hwk 5 (coding - too easy, but could give them a break as they do their projects)",
      //   title: "Disk Scheduling",
      //   url: "hwk5.disk/",
      //   due: "10/27/2025",  // wk 9, Monday 
      // },
      // {
      //   name: "Hwk 6 (coding - hard)",
      //   title: "Extendible (Dynamic) Hashing",
      //   url: "hwk6.exhash/",
      //   due: "11/21/2025",  // wk 12, Fri 
      // },
      // {
      //   name: "Hwk 7 (written)",
      //   title: "Normalization and DB Theory",
      //   url: "hwk7.theory/",
      //   due: "12/17/2025", // wk 15, finals
      // },
      // {
      //   name: "Hwk 6 (coding - hard)",
      //   title: "B+Tree",
      //   url: "hwk6.btree/",
      //   due: "11/10/2025",
      // },
    ],

    ////////////////////////////// PROJECTS ///////////////////////////////
     projects: [
      // {
      //   name: "Project Teams",
      //   title: "Team Preferences",
      //   url: "proj/",
      //   due: "10/29/2025",  // wk 9, wednesday
      // },
      // {
      //   name: "Project Prop",
      //   title: "Project Proposal",
      //   url: "proj/#prop",
      //   due: "11/10/2025", // wk 10, friday
      // },
      // {
      //   name: "Project Demo",
      //   title: "Project Demo",
      //   url: "proj/#demo",
      //   due: "12/10/2025",  // wk 14, wednesday
      // },
      // {
      //   name: "Project Code",
      //   title: "Project Code",
      //   url: "proj/#code",
      //   due: "12/19/2025",  // finals wk, friday
      // },
    ],

    ////////////////////////////////// LABS ////////////////////////////////
    // labs: [
    //   {
    //     name: "Lab 1",
    //     title: "SQL: Basic Queries",
    //     url: "lab1/",
    //     due: "10/6/2025", // Mon
    //   },
    //   // {
    //   //   name: "Lab 2",
    //   //   title: "SQL: More Advanced Queries",
    //   //   url: "lab2.models/",
    //   //   due: "10/17/2025", // Fri
    //   // },
    // ],
  },

  lectures: [
    // wk 1
    "Problems in data management",
    "Relational model: Connection to sets",
    "Relational model: keys, schema diagram",
      "Notes: <a href='https://drive.google.com/file/d/10d8JU6ZL2dDySIGkZdV8jXVI9_uiGHPH/view?usp=drive_link'>1a. Intro to DB</a>" + "<br/>" +
      "Notes: <a href='https://drive.google.com/open?id=1C0g0MafIFxPI_h_NRqVvrDeDQ7cxDEyT&usp=drive_fs'>1b. Relational model</a>" + "<br/>"
    ,
    // wk 2
    "<strong>Labor Day<br/>(no class)</strong>",
    "Start relational algebra",
    "RA: composition",
      "",
    // wk 3
    "RA: natural join",
    "RA: outer joins, rename operator",
    "RA: grouping, aggregation",
      "",
    // wk 4
    "SQL: schema definition",
    "SQL: writing basic queries, joins",
    "SQL: outer joins, renaming, temporary tables",
      "",
    // wk 5
    "SQL: subqueries",
    "SQL: grouping and aggregation",
    "<strong><emph>Class Cancelled</emph></strong>",
      "",
    // wk 6
    "SQL: lab",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 1</emph></strong>",
      "",
    // wk 7
    "Theory: functional dependencies",
    "Theory: attribute-set closure and superkeys",
    "Theory: FD-set closure, Armstrong's axioms",
      "",
    // wk 8
    "<strong>Fall Break</strong>",
    "Theory: normal forms, 1NF, 2NF",
    "Theory: BCNF decomposition",
      "",
    // wk 9
    "Theory: lossless join; FD preservation",
    "Theory: minimal FD-Set cover and 3NF synthesis",
    "Files: file abstraction",
      "",
    // wk 10
    "Files: disk scheduling",
    "Files: formats and organization",
    "Files: query costs",
      "",
    // wk 11
    "Start indexing",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 2</emph></strong>",
      "",
    // wk 12
    "Indexing: B+Tree properties",
    "Indexing: B+Tree insertion",
    "Indexing: B+Tree analysis",
      "",
    // wk 13
    "Indexing: extendible hashing",
    "<strong>Thanksgiving</strong>",
    "<strong>Thanksgiving</strong>",
      "",
    // wk 14
    "Start transactions: ACID, serializability",
    "Transactions: serializability test, precedence graphs",
    "Transactions: concurrency control",
      "",
    // wk 15
    "<strong><emph>Group Demos Day 1</emph></strong>",
    "<strong><emph>Group Demos Day 2</emph></strong>",
    "<strong>Reading Period</strong>",
      "",
    // wk final
    "",
    "<strong><emph>Final Exam (Comprehensive)<br/>4:00-6:00</emph></strong>",
    "",
      "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("8/31/26", days, MWF);
schedule.generateHTMLResources();
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();

