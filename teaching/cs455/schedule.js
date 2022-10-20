let days = {
  assignments: {
    homework: [
      {
        name: "Hwk 1 (written)",
        title: "The Relational Model",
        url: "hwk1.rel/",
        due: "9/12/2022",
      },
      {
        name: "Hwk 2 (written)",
        title: "Relational Algebra",
        url: "hwk2.ra/",
        due: "9/23/2022",
      },
      {
        name: "Hwk 3 (coding)",
        title: "Data Preparation",
        url: "hwk3.ddl/",
        due: "10/3/2022",
      },
    
      {
        name: "Hwk 4 (coding)",
        title: "Writing SQL Queries",
        url: "hwk4.dml/",
        due: "10/14/2022",
      },
      {
        name: "Hwk 5 (coding)",
        title: "Design Theory - Closure of FD Sets",
        url: "hwk5.closure/",
        due: "10/28/2022",
      },
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
    "Review of set theory",
    "Relational Model: Connection to sets",
    // wk 2
    "<strong>Labor Day<br/>(no class)</strong>",
    "Relational Model: keys",
    "Relational Model: designing schema",
    // wk 3
    "Relational Algebra: selection, projection, and query plans",
    "RA: natural join",
    "RA: outer joins, rename, NULL",
    // wk 4
    "RA: aggregation and grouping",
    "SQL: schema definition; integrity constraints",
    "SQL: foreign keys; insert, delete, update operations",
    // wk 5
    "SQL: selection, joins, set ops",
    "SQL: outer joins, renaming, WITH",
    "SQL: subqueries",
    // wk 6
    "SQL: grouping and aggregation",
    "SQL Work Day",
    "SQL Work Day",
    // wk 7
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 1</emph></strong>",
    "Design Theory: functional dependencies",
    // "App development; SQL injection",
    // "App Lab",
    // wk 8
    "<strong>Fall Break</strong>",
    "Theory: functional dependencies, Attribute set closure",
    "Theory: Review of attribute-set closure; superkeys algorithm",
    // wk 9
    "Theory: FD-set closure; Armstrong's Axioms, proof of inference rules",
    "Theory: Normal Forms: 1NF, 2NF",
    "Theory: BCNF; Decomposition algorithm",
    // wk 10
    // "Disks and files; access patterns",
    "Theory: Dependency preservation",
    "Theory: Canonical cover; 3NF synthesis algo",
    "File organization of tuples",
    // wk 11
    "Database files",
    "Cost analysis; Join algorithms",
    "<strong><emph>Review</emph></strong>",
    // wk 12
    "<strong><emph>Exam 2</emph></strong>",
    "<strong>Thanksgiving</strong>",
    "<strong>Thanksgiving</strong>",
    // wk 13
    "Start Indexing",
    "B+Trees: properties, operations",
    "B+Trees (cont'd)",
    // "Bitmaps",
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
