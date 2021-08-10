let days = {
  lectures: [
    // wk 1
    "Our first algorithm",
    "What is CS, anyway?",
    "Objects vs. Classes; the Circle class",
    // wk 2
    "<span style='color: #0f79d0'>Labor Day (no class)</span>",
    "Variables and data types, methods, and constructors",
    "Saving algorithms; Method calls",
    // wk 3
    "Writing classes: TicketMachine. Printing",
    "Conditionals",
    "Random, more conditionals, return",
    // wk 4
    "Else-if; Start data types: primitives",
    "Type-casting (narrowing, widening)",
    "Lab 4 solution; boolean expressions",
    // wk 5
    "Classes as types: references, object equivalence",
    "Object composition: Abstraction and modularity",
    "Class APIs: Strings",
    // wk 6
    "Loops",
    "<span style='color: #0f79d0'>Review</span>",
    "Writing while loops",
    // wk 7
    "For loops",
    "Nested loops",
    "Start arrays",
    // wk 8
    "<span style='color: #0f79d0'>Fall Break (no class)</span>",
    "Arrays of Objects: TurtleMob",
    "Finish TurtleMob",
    // wk 9
    "Start ArrayList",
    "ArrayList",
    "Scanning for input: ChatBot",
    // wk 10
    "Finish ChatBot; Start HashMap",
    "HashMap, for-each loop",
    "HashMap (cont.): Smarter ChatBot",
    // wk 11
    "Start files",
    "<span style='color: #0f79d0'>Review</span>",
    "File I/O",
    // wk 12
    "Information hiding, `static`, `main()`",
    "`enum`; IntelliJ IDE",
    "Complexity: Linear search",
    // wk 13
    "Binary search",
    "<span style='color: #0f79d0'>Thanksgiving (no class)</span>",
    "<span style='color: #0f79d0'>Thanksgiving (no class)</span>",
    // wk 14
    "Selection sort",
    "Bubble Sort and optimizations",
    "Shaker sort, list operations",
    // wk 15
    "Recursion",
    "<span style='color: #0f79d0'>Review</span>",
    "<span style='color: #0f79d0'>Reading Period</span>",
    // wk final
    "",
    "<span style='color: #0f79d0'>Final Exam (12p - 2p)</span>",
    "",
  ],
  labs: [
    "Lab 1",
    "Lab 2",
    "Lab 3",
    "Lab 4",
    "Lab 5",
    "<span style='color: #0f79d0'>Exam 1</span>",
    "Lab 6",
    "Lab 7",
    "Lab 8",
    "Lab 9",
    "<span style='color: #0f79d0'>Exam 2</span>",
    "Lab 10",
    "<span style='color: #0f79d0'>Thanksgiving (no class)</span>",
    "Lab 11",
    "<span style='color: #0f79d0'>Reading Period</span>",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("8/30/2021", days, MWRF);
schedule.generateHTMLCalendar();
