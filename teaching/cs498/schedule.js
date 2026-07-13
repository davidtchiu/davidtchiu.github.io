let days = {
  resources: [
    {
      name: "Course Syllabus",
      url: "syllabus"
    }
  ],
  assignments: {
    homework: [
    ],
    labs: [
    ],
  },
  lectures: [
    // wk 1
    "Exploration: Capstone sorting exercise", // Give students a list of possible project ideas: some too small, some too large, some vague, some feasible. Have them classify each one as “too small,” “reasonable,” “too ambitious,” or “unclear.”
    "Exploration: Project repair lab", // Give students project ideas, and get then to repair them so they are more in scope.
      "Mon: <a href='https://docs.google.com/document/d/1e_NsdxjyYxz_24HmNAQc9G1LL7XH3xYcJH2AMQa_F1Y/edit?usp=drive_link'>Idea Classification</a>'" + "<br/>" + 
        "Wed: <a href='https://docs.google.com/document/d/19oZe04G3wZL7xSLWYL6kKj3xkMyJTAfPALX6S3lA92o/edit?usp=drive_link'>Repair Lab</a>'",
    // wk 2
    "<strong>MLK Day<br/>(no class)</strong>",
    "Exploration: Idea generation", // Come up with at least 3 project directions
      "Wed: <a href='https://docs.google.com/document/d/1wRyQCQUXBkwbegbVCaENkez6tRVuKPwPpB865eEz-vc/edit?usp=drive_link'>Idea Radar</a>",
    // wk 3
    "Project def'n: Alternatives comparison", // Students compare 3 candidate projects using criteria: interest, feasibility, novelty, technical depth, data availability, evaluation, and risk. Each student/team explains what they chose and what they rejected.
    "Project def'n: Project definition and personas", 
    "",
    // wk 4
    "Problem statement", 
    "Problem statement (cont.)",
    "",
    // wk 5
    "AI tool finding", // 
    "AI tool testing", // 
    "",
    // wk 6
    "Background: Prior work hunt", // Students find examples of similar apps, papers, GitHub repos, datasets, tools, or APIs. They classify each as inspiration, competitor, dependency, or warning sign.
    "Background: Choices", // tech, resource, and data discussions
    "",
    // wk 7
    "Risks: Ethics study", // 
    "Risks: Pre-mortem and mitigation", // premortem and mitigation
    "",
    // wk 7
    "Feasibility", 
    "Feasibility: MVP and project scope", 
    "",
    // wk 8
    "<strong>Fall Break</strong>",
    "Use-case: User stories",
    "",
    // wk 9: 
    "Use-case: User stories", 
    "Use-case: First storyboard", 
    // "Input/output audit", // For every major component, students define inputs, outputs, data formats, and failure cases.",
    // "Check whether the components are real enough to implement", //. This is where vague “AI module” boxes get challenged.",
    "",
    // wk 10
    "Use-case: First storyboard", 
    "Architecture: ", 
    "",
    // wk 11
    "Challenges and tradeoffs", 
    "Cont'd",
    "",
    // wk 12
    "Git basics",
    "Git cont.",
    "",
    // wk 13
    "TBD",
    "<strong>Thanksgiving Break</strong>",
    "",
    // wk 14
    "Milestones", //Students build a slide outline: problem, motivation, prior work, design, feasibility, timeline, risks.",
    "Timeline", // Peers must ask one feasibility question and one scope question.",
    "",
    // wk 15
    "Eval planning", // It is the first day of capstone next semester. What exactly do you do?” Students write their first-week action plan.
    "<strong>Reading Period</strong>",
    "",
    // // wk final
    // "",
    // "",
    // "",
  ],
};


// print out the schedule to HTML
const schedule = new CourseCalendar("8/31/2026", days, MF);
schedule.generateHTMLResources();
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();

