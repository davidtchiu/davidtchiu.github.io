let days = {
  assignments: {
    homework: [
      {
        name: "Hwk 1",
        title: "The Relational Model",
        url: "hwk1.rel/",
        due: "9/8/2021",
      },
      {
        name: "Hwk 2",
        title: "Relational Algebra",
        url: "hwk2.ra/",
        due: "9/22/2021",
      },
      // {
      //   name: "Hwk 3",
      //   title: "Data Preparation",
      //   url: "hwk3.ddl/",
      //   due: "10/1/2021",
      // },
      // {
      //   name: "Hwk 4",
      //   title: "Writing SQL Queries",
      //   url: "hwk4.dml/",
      //   due: "10/11/2021",
      // },
      // {
      //   name: "Hwk 5a",
      //   title: "Normalization",
      //   url: "hwk5.norm/",
      //   due: "10/20/2021",
      // },
      {
        name: "Hwk 5",
        title: "Normalization",
        url: "hwk5.norm/",
        due: "10/29/2021",
      },
      {
        name: "Hwk 6",
        title: "Joins!",
        url: "hwk6.joins/",
        due: "11/15/2021",
      },
      {
        name: "Hwk 7",
        title: "Extendible Hashing",
        url: "hwk7.btree/",
        due: "12/1/2021",
      },
    ],

    ////////////////////////////// PROJECTS ///////////////////////////////
    // projects: [
    //   {
    //     name: "Proj 1",
    //     title: "Backend Development with Node.js",
    //     url: "proj1.cloud/",
    //     due: "9/20/2021",
    //   },
    //   {
    //     name: "Proj 2",
    //     title: "Project Planning",
    //     url: "proj3.planning/",
    //     due: "11/1/2021",
    //   },
    //   {
    //     name: "Proj 3",
    //     title: "Implementation",
    //     url: "proj4.impl/",
    //     due: "12/10/2021",
    //   },
    // ],

    ////////////////////////////////// LABS ////////////////////////////////
    labs: [
      {
        name: "Lab",
        title: "2-Day SQL Bootcamp",
        url: "lab.sql/",
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
    "SQL Lab 1",
    "SQL: subqueries",
    "SQL: grouping and aggregation",
    // wk 6
    "SQL: grouping and aggregation, triggers, transactions",
    "SQL Lab 2",
    "<strong><emph>Review</emph></strong>",
    // "SQL Lab 3 (Node.js)",
    // wk 7
    "<strong><emph>Exam 1 (in person)</emph></strong>",
    "Armstrong’s axioms, inference rules",
    "DB theory: functional dependencies (FD)",
    // wk 8
    "<strong>Fall Break</strong>",
    "Normal forms: 1NF, 2NF",
    "Shortfalls of 2NF; BCNF",
    // wk 9
    "Canonical cover of FD Sets",
    "Disks and files; access patterns",
    "Disk scheduling; Buffer management",
    // wk 10
    "Database files",
    "File organization of tuples",
    "Cost analysis; Join algorithms",
    // wk 11
    "Start Indexing",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 2</emph></strong>",
    // wk 12
    "B+Trees: properties, operations",
    "B+Trees (cont'd)",
    "Bitmaps",
    // wk 13
    "Extendible hashing",
    "<strong>Thanksgiving</strong>",
    "<strong>Thanksgiving</strong>",
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
const schedule = new CourseCalendar("8/30/21", days, MWF);
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
