| Week   | Tue                                          | Thu                           |
| ------ | -------------------------------------------- | ----------------------------- |
| 1      | Introduction                                 | VS Code; Start command line   |
| 2      | Command-line Lab; Start Git                  | More Git; Git lab             |
| 3      | Git branching, merging                       | Finish Git; Git branching lab |
| 4      | Intro to the web; JS Fundamentals            | JS Fundamentals (Cont'd)      |
| 5      | DOM navigation and manipulation              | Event handling                |
| 6      | More event handling                          | Asynchronous execution        |
| 7      | Promises; Await                              | Ajax, JSON, Axios             |
| 8      | _Fall Break (no class)_                      | Process Models; Start Agile   |
| 9      | User stories, feature selection; Stories Lab | Start Node.js                 |
| 10     | Node.js and Express                          | More Express                  |
| 11     | EJS Templating                               | EJS+Express Lab?              |
| 12     | Software Testing                             | Jasmine; Testing Lab          |
| 13     | Project Work Day                             | _Thanksgiving (no class)_     |
| 14     | Panel                                        | Panel                         |
| 15     | Project Work Day                             | _Reading Period (no class)_   |
| Finals | Presentations                                |                               |



let days = {
  lectures: [
    // wk 1
    "Introduction",
    "VS Code; Start command line",
    // wk 2
    "Command-line Lab; Start Git",
    "More Git; Lab on Git",
    // wk 3
    "Git: branching, merging",
    "Finish Git; Lab on Git branching",
    // wk 4
    "Intro to the web; JS Fundamentals",
    "JS Fundamentals",
    // wk 5
    "DOM navigation and manipulation",
    "Event handling",
    // wk 6
    "Event handling",
    "Asyncrhonous execution",
    // wk 7
    "Promises",
    "Ajax, JSON, Axios",
    // wk 8
    "<span style='color: #0f79d0'>Fall Break (no class)</span>",
    "Process Models; Start Agile",
    // wk 9
    "User stories, feature selection; Stories Lab",
    "Start Node.js",
    // wk 10
    "Node.js and Express",
    "More Express",
    // wk 11
    "EJS Templating",
    "EJS+Express Lab",
    // wk 12
    "Software Testing",
    "Jasmine; Testing Lab",
    // wk 13
    "<span style='color: #0f79d0'>Project Work Day</span>",
    "<span style='color: #0f79d0'>Thanksgiving (no class)</span>",
    // wk 14
    "<span style='color: #0f79d0'>Panel</span>",
    "<span style='color: #0f79d0'>Panel</span>",
    // wk 15
    "<span style='color: #0f79d0'>Project Work Day</span>",
    "<span style='color: #0f79d0'>Reading Period</span>",
    // wk final
    "<span style='color: #0f79d0'>Presentations</span>",
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("8/30/2021", days, TR);
schedule.generateHTMLCalendar();
