let days = {
  lectures: [
    // wk 1
    "Why DBMS? Data independence",
    "Relational model: connection to set theory",
    "Keys and schema",
    // wk 2
    "Labor Day (no class)",
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
    "SQL Lab",
    // wk 6
    "SQL Lab Cont.",
    "Review",
    "Exam 1",
    // wk 7
    "DB theory: functional dependencies (FD)",
    "Armstrong’s axioms and deriving inference rules",
    "Attribute closure and keys",
    // wk 8
    "Fall Break (no class)",
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
    "Review",
    "Exam 2",
    // wk 12
    "B+Trees: properties, operations",
    "B+Trees (cont.): complexity analysis; Start dynamic hashing",
    "Bitmaps",
    // wk 13
    "Bitmap compression: WAH",
    "Thanksgiving (no class)",
    "Thanksgiving (no class)",
    // wk 14
    "Start transactions: ACID, serializability",
    "Transactions: serializability test, precedence graph, topoSort",
    "Transactions: Concurrency control",
    // wk 15
    "Project Demos",
    "Project Demos",
    "Reading Period",
    // wk final
    "",
    "Final Exam: 4:00-6:00",
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("8/30/2021", days, MWF);
schedule.generateHTMLCalendar();
