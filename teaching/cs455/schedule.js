let days = {
  assignments: {
    homework: [
      {
        name: "Hwk 1 (written)",
        title: "The Relational Model",
        url: "hwk1.rel/",
        due: "9/8/2021",
      },
      {
        name: "Hwk 2 (written)",
        title: "Relational Algebra",
        url: "hwk2.ra/",
        due: "9/22/2021",
      },
      {
        name: "Hwk 3 (coding)",
        title: "Data Preparation",
        url: "hwk3.ddl/",
        due: "10/1/2021",
      },
      {
        name: "Hwk 4 (coding)",
        title: "Writing SQL Queries",
        url: "hwk4.dml/",
        due: "10/11/2021",
      },
      {
        name: "Hwk 5 (coding)",
        title: "Design Theory - Closure of FD Sets",
        url: "hwk5.closure/",
        due: "10/22/2021",
      },
      {
        name: "Hwk 6 (coding)",
        title: "Design Theory - BCNF Normalization",
        url: "hwk6.bcnf/",
        due: "11/3/2021",
      },
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
      {
        name: "Hwk 7 (coding)",
        title: "B+Tree",
        url: "hwk7.btree/",
        due: "11/24/2021",
      },
    ],

    ////////////////////////////// PROJECTS ///////////////////////////////
    projects: [
      {
        name: "Project",
        title: "Database Term Project",
        url: "proj/",
        // due: "9/20/2021",
      },
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
    ],

    ////////////////////////////////// LABS ////////////////////////////////
    labs: [
      {
        name: "Lab",
        title: "SQL Lab!",
        url: "lab.pplsoft/",
        // due: "10/5/2021",
      },
    ],
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
    "Design theory: functional dependencies",
    "Theory: Armstrong’s axioms, inference rules",
    // "App development; SQL injection",
    // "App Lab",
    // wk 8
    "<strong>Fall Break</strong>",
    "Theory: 1NF, 2NF",
    "Theory: BCNF; decomposition",
    // wk 9
    "Theory: Canonical cover of FD sets",
    "Disks and files; access patterns",
    "File organization of tuples",
    // "Disk scheduling; Buffer management",
    // wk 10
    "Database files",
    "Cost analysis; Join algorithms",
    "<strong><emph>Review</emph></strong>",
    // wk 11
    "<strong><emph>Exam 2</emph></strong>",
    "Start Indexing",
    "B+Trees: properties, operations",
    // wk 12
    "B+Trees (cont'd)",
    "<strong>Thanksgiving</strong>",
    "<strong>Thanksgiving</strong>",
    // wk 13
    "Bitmaps",
    "Extendible hashing",
    "Start transactions: ACID, serializability",
    // wk 14
    "Transactions: serializability test, precedence graphs",
    "Transactions: Concurrency control",
    "Transactions: Concurrency control",
    // wk 15
    "Project Demos",
    "Project Demos",
    "<strong>Reading Period</strong>",
    // wk final
    "",
    "",//<strong><emph>Final Exam<br/>4:00-6:00</emph></strong>",
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("8/30/21", days, MWF);
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
