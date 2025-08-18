let days = {
  resources: [
    {
      name: "Course Syllabus",
      url: "syllabus"
    },
    {
      name: "Lecture Notes",
      url: "https://canvas.pugetsound.edu"
    },
  ],
  assignments: {
    homework: [
      {
        name: "Hwk 1 (written)",
        title: "The Relational Model",
        url: "hwk1.rel/",
        due: "9/12/2025", // wk2, friday
      },
      {
        name: "Hwk 2 (written)",
        title: "Relational Algebra I",
        url: "hwk2.ra/",
        due: "9/22/2025", // wk3, friday
      },
      {
        name: "Hwk 3 (written)",
        title: "Relational Algebra II",
        url: "hwk3.ra2/",
        due: "10/1/2025", // wk5, tuesday
      },
      {
        name: "Hwk 4 (sql)",
        title: "SQL Data Ingestion",
        url: "hwk4.sqlddl/",
        due: "10/10/2025",  // wk6, friday
      },
      {
        name: "Hwk 5 (sql)",
        title: "Writing SQL Queries",
        url: "hwk5.sqldml/",
        due: "10/22/2025",  // wk 8, wednesday
      },
      {
        name: "Hwk 6 (coding)",
        title: "Design Theory 1 - FD Set Closure",
        url: "hwk6.closure/",
        due: "10/31/2025",  // wk 9, friday
      },
      {
        name: "Hwk 7 (coding)",
        title: "Design Theory 2 - BCNF Normalization",
        url: "hwk7.bcnf/",
        due: "11/14/2025", // wk 11, friday
      },
      // {
      //   name: "Hwk 7 (coding)",
      //   title: "B+Tree",
      //   url: "hwk7.btree/",
      //   due: "11/24/2021",
      // },
    ],

    ////////////////////////////// PROJECTS ///////////////////////////////
     projects: [
      {
        name: "Project Teams",
        title: "Team Preferences",
        url: "proj/",
        due: "10/29/2025",  // wk 9, wednesday
      },
      {
        name: "Project Prop",
        title: "Project Proposal",
        url: "proj/",
        due: "11/7/2025", // wk 10, friday
      },
      {
        name: "Project Demo",
        title: "Project Demo",
        url: "proj/",
        due: "12/10/2025",  // wk 14, wednesday
      },
      {
        name: "Project Code",
        title: "Project Code",
        url: "proj/",
        due: "12/19/2025",  // finals wk, friday
      },
    ],

    ////////////////////////////////// LABS ////////////////////////////////
    labs: [
      {
        name: "Lab",
        title: "SQL Lab!",
        url: "lab.pplsoft/",
      },
    ],
  },

  lectures: [
    // wk 1
    "<strong>Labor Day<br/>(no class)</strong>",
    "Why DBMS? Data independence (on Zoom)",
    "Relational model: Connection to sets",
    // wk 2
    "Relational model: keys",
    "Relational model: schema",
    "Relational algebra: selection, projection, and query plans",
    // wk 3
    "RA: query composition, set ops and compatibility",
    "RA: natural join",
    "RA: outer join, rename",
    // wk 4
    "RA: aggregation and grouping",
    "SQL: schema definition; integrity constraints",
    "SQL: foreign keys; insert, delete, update operations",
    // wk 5
    "SQL: selection, joins, set ops",
    "SQL: More SQL",
    "SQL: outer joins, renaming, WITH",
    // wk 6
    "SQL Work Day 1",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 1</emph></strong>",
    // wk 7
    "SQL: grouping and aggregation",
    "SQL Work Day 2",
    "Storage: Disk architecture, access patterns",
    // wk 8
    "<strong>Fall Break</strong>",
    "Storage: File abstraction",
    "Storage: Disk scheduling",
    // wk 9
    "Indexing: motivation",
    "B+Tree structure",
    "B+Tree operations",
    // wk 10
    "B+Tree insertion cases",
    "B+Tree runtime analysis",
    "Bitmap indexing",
    // wk 11
    "Bitmap compression",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 2</emph></strong>",
    // wk 12
    "Theory: functional dependencies",
    "Theory: Attribute-set closure and superkeys",
    "Theory: FD-set closure; Armstrong's Axioms",
    // wk 13
    "Theory: Normalization",
    "<strong>Thanksgiving</strong>",
    "<strong>Thanksgiving</strong>",
    // wk 14
    "Theory: BCNF decomposition",
    "Transactions: ACID, serializability",
    "Transactions: serializability test, precedence graphs",
    // "Theory: Lossless join; dependency preservation",
    // "Theory: Canonical cover",
    // "Theory: 3NF synthesis",
    // wk 15
    "Transactions: Concurrency control",
    "<strong><emph>Final Presentation</emph></strong>",
    "<strong>Reading Period</strong>",
    // wk final
    "",
    "<strong><emph>Final Exam (Comprehensive)<br/>4:00-6:00</emph></strong>",
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("9/1/25", days, MWF);
schedule.generateHTMLResources();
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();

