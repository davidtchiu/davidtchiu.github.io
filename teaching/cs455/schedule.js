let days = {
  assignments: {
    homework: [
      {
        name: "Hwk 1",
        title: "The Relational Model",
        url: "hwk1.rel/",
        due: "9/10/2021",
      },
      {
        name: "Hwk 2",
        title: "Relational Algebra",
        url: "hwk2.ra/",
        due: "9/24/2021",
      },
      {
        name: "Hwk 3",
        title: "Data Cleansing",
        url: "hwk3.ddl/",
        due: "10/8/2021",
      },
      {
        name: "Hwk 4",
        title: "Writing SQL Queries",
        url: "hwk4.dml/",
        due: "10/20/2021",
      },
      {
        name: "Hwk 5",
        title: "Database Theory and Normalization",
        url: "hwk5.norm/",
        due: "11/1/2021",
      },
      {
        name: "Hwk 6",
        title: "Joins!",
        url: "hwk6.joins/",
        due: "11/19/2021",
      },
    ],

    ////////////////////////////// PROJECTS ///////////////////////////////
    projects: [
      {
        name: "Proj 1",
        title: "To the Cloud",
        url: "proj1.cloud/",
        due: "9/20/2021",
      },
      {
        name: "Proj 2",
        title: "Data-Driven Web Development",
        url: "proj2.php/",
        due: "10/18/2021",
      },
      {
        name: "Proj 3",
        title: "Project Planning",
        url: "proj3.planning/",
        due: "11/1/2021",
      },
      {
        name: "Proj 4",
        title: "Implementation",
        url: "proj4.impl/",
        due: "12/6/2021",
      },
    ],

    ////////////////////////////////// LABS ////////////////////////////////
    labs: [
      {
        name: "Lab",
        title: "2-Day SQL Bootcamp",
        url: "lab.sql/",
        due: "10/5/2021",
      },
    ],
  },

  lectures: [
    // wk 1
    "Why DBMS? Data independence",
    "Relational model; set theory",
    "Keys and schema",
    // wk 2
    "<span style='color: #0f79d0'>Labor Day (no class)</span>",
    "Relational algebra",
    "RA: expression trees; composition",
    // wk 3
    "RA: natural join, theta join",
    "RA: outer joins, rename, NULL",
    "RA: aggregation and grouping",
    // wk 4
    "SQL: schema definition; integrity constraints",
    "SQL: selection, joins, set ops",
    "SQL: SQL: outer joins, rename, WITH",
    // wk 5
    "SQL: subqueries: IN, EXISTS; start aggregation",
    "SQL: grouping and aggregation, triggers, transactions",
    "SQL Lab Day 1",
    // wk 6
    "SQL Lab Day 2",
    "<span style='color: #0f79d0'>Review</span>",
    "<span style='color: #0f79d0'>Exam 1</span>",
    // wk 7
    "DB theory: functional dependencies (FD)",
    "Armstrong’s axioms, inference rules",
    "Attribute closure and keys",
    // wk 8
    "<span style='color: #0f79d0'>Fall Break</span>",
    "Normal forms: 1NF, 2NF",
    "BCNF; Canonical cover",
    // wk 9
    "Disk and files: access times",
    "Access patterns, disk scheduling; Start files",
    "Buffer mgr; Start files: Format tradeoffs",
    // wk 10
    "File organization of tuples",
    "Cost analysis: join algorithms",
    "Start indexing",
    // wk 11
    "Indexing: B+Trees",
    "<span style='color: #0f79d0'>Review</span>",
    "<span style='color: #0f79d0'>Exam 2</span>",
    // wk 12
    "B+Trees: properties, operations",
    "B+Trees (cont.): complexity analysis; Start dynamic hashing",
    "Bitmaps",
    // wk 13
    "Bitmap compression: WAH",
    "<span style='color: #0f79d0'>Thanksgiving</span>",
    "<span style='color: #0f79d0'>Thanksgiving</span>",
    // wk 14
    "Start transactions: ACID, serializability",
    "Transactions: serializability test, precedence graphs",
    "Transactions: Concurrency control",
    // wk 15
    "Project Demos",
    "Project Demos",
    "<span style='color: #0f79d0'>Reading Period</span>",
    // wk final
    "",
    "<span style='color: #0f79d0'>Final Exam: 4:00-6:00</span>",
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("8/30/21", days, MWF);
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
