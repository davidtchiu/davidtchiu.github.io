let days = {
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
    "<span style='color: #0f79d0'>Fall Break (no class)</span>",
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
    "<span style='color: #0f79d0'>Thanksgiving (no class)</span>",
    "<span style='color: #0f79d0'>Thanksgiving (no class)</span>",
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
schedule.generateHTMLCalendar();
