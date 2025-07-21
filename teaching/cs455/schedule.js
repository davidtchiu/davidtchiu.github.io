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
        due: "9/16/2024",
      },
      {
        name: "Hwk 2 (written)",
        title: "Relational Algebra I",
        url: "hwk2.ra/",
        due: "9/25/2024",
      },
      {
        name: "Hwk 3 (written)",
        title: "Relational Algebra II",
        url: "hwk3.ra2/",
        due: "10/4/2024",
      },
      {
        name: "Hwk 4 (sql)",
        title: "SQL Data Ingestion",
        url: "hwk4.sqlddl/",
        due: "10/16/2024",
      },
      {
        name: "Hwk 5 (sql)",
        title: "Writing SQL Queries",
        url: "hwk5.sqldml/",
        due: "10/30/2024",
      },
      // {
      //   name: "Hwk 5 (coding)",
      //   title: "Joins",
      //   url: "hwk5.joins/",
      //   due: "11/4/2024",
      // },
      {
        name: "Hwk 6 (coding)",
        title: "Extendible Hashing",
        url: "hwk6.exhash/",
        due: "11/25/2024",
      },
      // {
      //   name: "Hwk 7 (coding)",
      //   title: "Design Theory - Closure of FD Sets",
      //   url: "hwk7.closure/",
      //   due: "12/4/2024",
      // },
      // {
      //   name: "Hwk 6 (coding)",
      //   title: "Design Theory - BCNF Normalization",
      //   url: "hwk6.bcnf/",
      //   due: "11/10/2023",
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
        due: "10/30/2024",
      },
      {
        name: "Project Prop",
        title: "Project Proposal",
        url: "proj/",
        due: "11/8/2024",
      },
      {
        name: "Project Demo",
        title: "Project Demo",
        url: "proj/",
        due: "12/11/2024",
      },
      {
        name: "Project-Code",
        title: "Project Code",
        url: "proj/",
        due: "12/20/2024",
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
    "SQL Work Day",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 1</emph></strong>",
    // wk 7
    "SQL: grouping and aggregation",
    "SQL Work Day",
    "Disk and Files: access patterns",
    // wk 8
    "<strong>Fall Break</strong>",
    "Disk and Files: access patterns",
    "Tuple format, file format",
    // wk 9
    "File organization and costs",
    "Start Indexing; Halloween Party",
    // "Join processing on files",
    "Multilevel indexing: B+Trees",
    // wk 10
    "B+Tree operations",
    "B+Tree insertion cases",
    "B+Tree height",
    // "Consistent hashing",
    // "Disks and files; access patterns",
    // wk 11
    "Dynamic hashing",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 2</emph></strong>",
     // "Files: Structure of tuples",
     // "Files: Organization of tuples",
     // "Files: Cost analysis; Join algorithms",
    // wk 12
    "Bitmap indexing",
    "Bitmap indexing",
    "Design Theory: functional dependencies",
    // wk 13
    "Theory: functional dependencies, Attribute set closure",
    "<strong>Thanksgiving</strong>",
    "<strong>Thanksgiving</strong>",
    // wk 14
    // "Theory: Review of attribute-set closure; superkeys algorithm",
    "Theory: FD set closure; Armstrong's Axioms, proof of inference rules",
    "Theory: 1NF, 2NF",
    "Cancelled",
    // wk 15
    "Theory: BCNF decomposition",
    // "Theory: Lossless join; dependency preservation",
    // "Theory: Canonical cover; 3NF synthesis",
    // "<strong><emph>Final Presentation</emph></strong>",
    "<strong><emph>Final Presentation</emph></strong>",
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
const schedule = new CourseCalendar("9/2/24", days, MWF);
schedule.generateHTMLResources();
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();

