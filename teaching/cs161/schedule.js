
- [Hwk 6: Tweet Processor](hwk6.twitter/) (11/15)
- [Hwk 7: Pooled Testing](hwk7.pooled/) (11/23)
- [Hwk 8: Black Jack](hwk8.blackjack/) (12/10)
- [Hwk 8 (alternate)](hwk8.prep/) -->

let days = {
  assignments: [
    {
      name: "Hwk 1",
      title: "A Better Circle",
      url: "hwk1.circle/",
      due: "9/8/2021",
    },
    {
      name: "Hwk 2",
      title: "Calculator",
      url: "hwk2.calc/",
      due: "9/24/2021",
    },
    {
      name: "Hwk 3",
      title: "Orca Card",
      url: "hwk3.orca/",
      due: "10/6/2021",
    },
    {
      name: "Hwk 4",
      title: "Robots!",
      url: "hwk4.robot/",
      due: "10/20/2021",
    },
    {
      name: "Hwk 5",
      title: "Loops",
      url: "hwk5.loops/",
      due: "11/3/2021",
    },
    {
      name: "Hwk 6",
      title: "Tweet Processor",
      url: "hwk6.twitter/",
      due: "11/15/2021",
    },    
    {
      name: "Hwk 7",
      title: "Pooled Testing",
      url: "hwk7.pooled/",
      due: "11/23/2021",
   },      
   {
    name: "Hwk 8 (Alternate)",
    title: "Black Jack",
    url: "hwk8.prep/",
    due: "11/30/2021",
  },
  {
    name: "Hwk 8",
    title: "Black Jack",
    url: "hwk8.blackjack/",
    due: "12/10/2021",
  },
],
  lectures: [
    // wk 1
    "Our first algorithm",
    "What is CS, anyway?",
    "Lab 1",
    "Objects vs. Classes; the Circle class",
    // wk 2
    "<span style='color: #0f79d0'>Labor Day (no class)</span>",
    "Variables and data types, methods, and constructors",
    "Lab 2",
    "Saving algorithms; Method calls",
    // wk 3
    "Writing classes: TicketMachine. Printing",
    "Conditionals",
    "Lab 3",
    "Random, more conditionals, return",
    // wk 4
    "Else-if; Start data types: primitives",
    "Type-casting (narrowing, widening)",
    "Lab 4",
    "Lab 4 solution; boolean expressions",
    // wk 5
    "Classes as types: references, object equivalence",
    "Object composition: Abstraction and modularity",
    "Lab 5",
    "Class APIs: Strings",
    // wk 6
    "Loops",
    "<span style='color: #0f79d0'>Review</span>",
    "<span style='color: #0f79d0'>Exam 1</span>",
    "Writing while loops",
    // wk 7
    "For loops",
    "Nested loops",
    "Lab 6",
    "Start arrays",
    // wk 8
    "<span style='color: #0f79d0'>Fall Break (no class)</span>",
    "Arrays of Objects: TurtleMob",
    "Lab 7",
    "Finish TurtleMob",
    // wk 9
    "Start ArrayList",
    "ArrayList",
    "Lab 8",
    "Scanning for input: ChatBot",
    // wk 10
    "Finish ChatBot; Start HashMap",
    "HashMap, for-each loop",
    "Lab 9",
    "HashMap (cont.): Smarter ChatBot",
    // wk 11
    "Start files",
    "<span style='color: #0f79d0'>Review</span>",
    "<span style='color: #0f79d0'>Exam 2</span>",
    "File I/O",
    // wk 12
    "Information hiding, `static`, `main()`",
    "`enum`; IntelliJ IDE",
    "Lab 10",
    "Complexity: Linear search",
    // wk 13
    "Binary search",
    "<span style='color: #0f79d0'>Thanksgiving (no class)</span>",
    "<span style='color: #0f79d0'>Thanksgiving (no class)</span>",
    "<span style='color: #0f79d0'>Thanksgiving (no class)</span>",
    // wk 14
    "Selection sort",
    "Bubble Sort and optimizations",
    "Lab 11",
    "Shaker sort, list operations",
    // wk 15
    "Recursion",
    "<span style='color: #0f79d0'>Review</span>",
    "<span style='color: #0f79d0'>Reading Period</span>",
    "<span style='color: #0f79d0'>Reading Period</span>",
    // wk final
    "",
    "<span style='color: #0f79d0'>Final Exam (12p - 2p)</span>",
    "",
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
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("8/30/2021", days, MWRF);
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
