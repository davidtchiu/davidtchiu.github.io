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
        due: "9/26/2025", // wk4, friday
      },
      {
        name: "Hwk 4 (sql)",
        title: "SQL Data Ingestion",
        url: "hwk4.sqlddl/",
        due: "10/6/2025",  // wk6, wednesday
      },
      {
        name: "Hwk 5 (sql)",
        title: "Writing SQL Queries",
        url: "hwk5.sqldml/",
        due: "10/22/2025",  // wk 8, wednesday
      },
      {
        name: "Hwk 6 (coding)",
        title: "Design Theory - FD Set Closure",
        url: "hwk6.closure/",
        due: "10/31/2025",  // wk 9, friday
      },
      {
        name: "Hwk 7 (coding)",
        title: "Design Theory - BCNF Normalization",
        url: "hwk7.bcnf/",
        due: "11/7/2025", // wk 10, friday
      },
      // {
      //   name: "Hwk 6 (coding)",
      //   title: "Extendible Hashing",
      //   url: "hwk6.exhash/",
      //   due: "11/20/2024",  // wk 12, wednesday
      // },
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
    "Data abstraction",
    "Relational model: Connection to sets",
    // wk 2
    "RM: keys, superkeys, foreign keys",
    "RM: schema",
    "Relational algebra: basic composition",
    // wk 3
    "RA: set operators and compatibility",
    "RA: natural join",
    "RA: outer join, rename",
    // wk 4
    "RA: grouping and aggregation",
    "SQL: schema definition; integrity constraints",
    "SQL: setting foreign keys; insert, delete, update",
    // wk 5
    "SQL: select-from-where, joins",
    "SQL: More examples",
    "SQL: outer joins, renaming, WITH clauses",
    // wk 6
    "SQL Work Day 1",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 1</emph></strong>",
    // wk 7
    "SQL: grouping and aggregation",
    "SQL Work Day 2",
    "Theory: Functional dependencies",
    // wk 8
    "<strong>Fall Break</strong>",
    "Theory: Attribute-set closure and superkeys",
    "Theory: FD-set closure; Armstrong's Axioms",
    // wk 9
    "Theory: Normal forms",
    "Theory: BCNF decomposition",
    "Theory: Lossless join; dependency preservation",
    // wk 10
    "Theory: Canonical cover; 3NF synthesis",
    "Storage: Disk architecture, access patterns",
    "Storage: File abstraction",
    // wk 11
    "Storage: Disk scheduling",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 2</emph></strong>",
    // wk 12
    "Indexing: motivation",
    "B+Tree structure",
    "B+Tree operations",
    // wk 13
    "B+Tree insertion",
    "<strong>Thanksgiving</strong>",
    "<strong>Thanksgiving</strong>",
    // wk 14
    "B+Tree runtime analysis",
    "Bitmaps",
    "Bitmap compression",
    // wk 15
    "Catchup",
    "<strong><emph>Presentations</emph></strong>",
    "<strong>Reading Period</strong>",
    // "Start transactions: ACID, serializability",
    // "Transactions: serializability test, precedence graphs",
    // "Transactions: Concurrency control",
    // wk final
    "",
    "<strong><emph>Final Exam (Comprehensive)<br/>4:00-6:00</emph></strong>",
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("9/1/2025", days, MWF);
schedule.generateHTMLResources();
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();

