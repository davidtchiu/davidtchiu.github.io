let days = {
  assignments: {
    homework: [
      {
        name: "Hwk 1",
        title: "Github Homepage",
        url: "hwk1.ghpages/",
        due: "9/20/2021",
      },
      {
        name: "Hwk 2",
        title: "Wordplay",
        url: "hwk2.wordplay/",
        due: "10/6/2021",
      },
      {
        name: "Hwk 3",
        title: "Scoreboard",
        url: "hwk3.scoreboard/",
        due: "10/18/2021",
      },
      {
        name: "Hwk 4",
        title: "Schelling's Model",
        url: "hwk4.schelling/",
        due: "11/03/2021",
      },
      {
        name: "Hwk 5",
        title: "Simone the Memory Game",
        url: "hwk5.simone/",
        due: "11/15/2021",
      },
    ],

    ////////////////////////////// PROJECTS ///////////////////////////////
    projects: [
      // {
      //   name: "Proj 1",
      //   title: "To the Cloud",
      //   url: "proj1.cloud/",
      //   due: "9/20/2021",
      // },
      // {
      //   name: "Proj 2",
      //   title: "Data-Driven Web Development",
      //   url: "proj2.php/",
      //   due: "10/18/2021",
      // },
      // {
      //   name: "Proj 3",
      //   title: "Project Planning",
      //   url: "proj3.planning/",
      //   due: "11/1/2021",
      // },
      // {
      //   name: "Proj 4",
      //   title: "Implementation",
      //   url: "proj4.impl/",
      //   due: "12/6/2021",
      // },
    ],

    ////////////////////////////////// LABS ////////////////////////////////
    labs: [
      {
        name: "Lab 1",
        title: "Command Line Bootcamp",
        url: "lab.cmd/",
      },
      {
        name: "Lab 2",
        title: "Git Basics",
        url: "lab.git1/",
      },
      {
        name: "Lab 3",
        title: "Git Branching",
        url: "lab.cmd/",
      },
      {
        name: "Lab 4",
        title: "Personal, Stories, Features",
        url: "lab.features/",
      },
      {
        name: "Lab 5",
        title: "Unit Testing",
        url: "lab.testing/",
      },
    ],
  },

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
    "<span style='color: #0f79d0'>Fall Break</span>",
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
    "Project Work Day",
    "<span style='color: #0f79d0'>Thanksgiving</span>",
    // wk 14
    "Panel",
    "Panel",
    // wk 15
    "Project Work Day",
    "<span style='color: #0f79d0'>Reading Period</span>",
    // wk final
    "<span style='color: #0f79d0'>Presentations (12p - 2p)</span>",
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("8/30/2021", days, TR);
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
