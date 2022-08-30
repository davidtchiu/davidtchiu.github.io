let days = {
  assignments: {
    homework: [
      {
        name: "Hwk 1 (written)",
        title: "The Relational Model",
        url: "hwk1.rel/",
        due: "9/9/2022",
      },
      // {
      //   name: "Hwk 2 (written)",
      //   title: "Relational Algebra",
      //   url: "hwk2.ra/",
      //   due: "9/21/2022",
      // },
      // {
      //   name: "Hwk 3 (coding)",
      //   title: "Data Preparation",
      //   url: "hwk3.ddl/",
      //   due: "9/30/2022",
      // },
      // {
      //   name: "Hwk 4 (coding)",
      //   title: "Writing SQL Queries",
      //   url: "hwk4.dml/",
      //   due: "10/12/2022",
      // },
      // {
      //   name: "Hwk 5 (coding)",
      //   title: "Design Theory - Closure of FD Sets",
      //   url: "hwk5.closure/",
      //   due: "10/24/2022",
      // },
      // {
      //   name: "Hwk 6 (coding)",
      //   title: "Design Theory - BCNF Normalization",
      //   url: "hwk6.bcnf/",
      //   due: "11/9/2022",
      // },
      // {
      //   name: "Hwk 5a",
      //   title: "Normalization",
      //   url: "hwk5.norm/",
      //   due: "10/20/2021",
      // },
      // {
      //   name: "Hwk 7 (coding)",
      //   title: "Joins!",
      //   url: "hwk7.joins/",
      //   due: "11/19/2021",
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
    //   {
    //     name: "Project",
    //     title: "Database Term Project",
    //     url: "proj/",
    //     // due: "9/20/2021",
    //   },
      // {
      //   name: "Proj 2",
      //   title: "Project Planning",
      //   url: "proj3.planning/",
      //   due: "11/1/2021",
      // },
      // {
      //   name: "Proj 3",
      //   title: "Implementation",
      //   url: "proj4.impl/",
      //   due: "12/10/2021",
      // },
    // ],

    ////////////////////////////////// LABS ////////////////////////////////
    // labs: [
    //   {
    //     name: "Lab",
    //     title: "SQL Lab!",
    //     url: "lab.pplsoft/",
    //     // due: "10/5/2021",
    //   },
    // ],
  },

  lectures: [
    // wk 1
    "Why DBMS? Data independence",
    "Relational model; set theory",
    "Keys and schema",
    // wk 2
    "<strong>Labor Day<br/>(no class)</strong>",
    "Relational algebra",
    "RA: expression trees; composition",
    // wk 3
    "RA: natural join, theta join",
    "RA: outer joins, rename, NULL",
    "RA: aggregation and grouping",
    // wk 4
    "SQL: schema definition; integrity constraints",
    "SQL: selection, joins, set ops",
    "SQL: outer joins, renaming, WITH",
    // wk 5
    "SQL: subqueries",
    "SQL: grouping and aggregation",
    "SQL: grouping and aggregation, triggers, transactions",
    // wk 6
    "SQL Work Day",
    "SQL Work Day",
    "<strong><emph>Review</emph></strong>",
    // wk 7
    "<strong><emph>Exam 1</emph></strong>",
    "Design Theory: functional dependencies",
    "Theory: closures, Armstrong’s axioms",
    // "App development; SQL injection",
    // "App Lab",
    // wk 8
    "<strong>Fall Break</strong>",
    "Theory: 1NF, 2NF",
    "Theory: BCNF; decomposition",
    // wk 9
    "Theory: Dependency preservation",
    "Theory: Canonical cover; 3NF synthesis",
    "Disks and files; access patterns",
    // "Disk scheduling; Buffer management",
    // wk 10
    "File organization of tuples",
    "Database files",
    "<strong><emph>Review</emph></strong>",
    // wk 11
    "<strong><emph>Exam 2</emph></strong>",
    "Cost analysis; Join algorithms",
    "Start Indexing",
    // wk 12
    "B+Trees: properties, operations",
    "<strong>Thanksgiving</strong>",
    "<strong>Thanksgiving</strong>",
    // wk 13
    "B+Trees (cont'd)",
    "Bitmaps",
    "Extendible hashing",
    // wk 14
    "Start transactions: ACID, serializability",
    "Transactions: serializability test, precedence graphs",
    "Transactions: Concurrency control",
    // wk 15
    "Project Demos",
    "Project Demos",
    "<strong>Reading Period</strong>",
    // wk final
    "",
    "<strong><emph>Final Exam<br/>4:00-6:00</emph></strong>",
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("8/29/22", days, MWF);
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
