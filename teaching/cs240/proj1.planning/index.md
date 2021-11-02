## CS 240 - Software Engineering

### Project 1: Initial Sprint Planning

#### Student Outcomes

- To write a product vision statement, personas, and scenarios
- To identify and write user stories
- To practice the agile design process: sprint planning

#### Project Requirements

Your project can be anything, but it must observe the following requirements:

- JavaScript is to be used
- Git and Github used for version control
- A graphical user interface (GUI) through HTML+CSS must be supported
- Use of third party libraries/tools must be approved by me
  - But you must use at least 2 significant Node.js packages, like Electron, MongoDB, React, Express, etc.
- Deployment of your app on a server (that was given to you)
- Scrum is practiced and meeting minutes logged daily
- Trello is used to manage the product and sprint backlogs

#### Proposed Software Vision

With your teammates, agree on a software application that you believe would be doable in 4-5 weeks of sustained team work. You'll have 1 or 2 individual homework assignments due in the meantime, but they're designed to give you the skills you'll need to produce a workable product by finals week. As you define your project, keep in mind that people's schedules and workloads vary. That is, I want you to be cautiously ambitious -- design what a minimal product release might look like by the end of the year, and build in some "reach features" for if you have time, or your team's "velocity" is faster than expected. As always, communicate your ideas with me before running away with it, so that I can input my suggestions.

- Start by having one of your group members create a new Github project called `cs240-term-project` and clone it down to your machines.

- Your group should work together to come up with a project vision statement. This statement should just be a short 1-2 paragraph summary of what your product does. (In the real world, you'd be justifying what makes your product unique on the market, but we'll skip that part.) Here are a couple resources that helps you write your vision statement:

  - [https://280group.com/what-is-product-management/skills/product-vision/](https://280group.com/what-is-product-management/skills/product-vision/)
  - [https://www.productboard.com/blog/write-product-vision/](https://www.productboard.com/blog/write-product-vision/)

- Name this file `README.md` and remember to push it up to Github when you're done. If you refresh your Github project page, it should now display the vision statement directly within the page. Add a link to your Trello workspace to this readme.

- It would be ideal to have the product vision written and agreed-upon before the **Persona/Scenarios Lab**.

#### Design Documents: Personas and Scenarios

**Note:** You can wait to complete this section until after we've completed the in-class **Persona/Scenarios Lab** and the **User Stories/Sprint Planning Lab**.

As part of the software design process, you are to provide the following written documents.

- **Personas**

  - Envision all the different kinds of users that may interact with your system, and create a persona (an imagined user profile) for each. If you participated in the persona lab in class, you should already know what needs to go into each persona statement. I think anywhere between 1-3 personas seems about right for projects your size, though this may vary.

  - Put all your personas in the same file that you started writing in the lab.

  - Push up to Github when you're done.

- **Scenarios**

  - By this time, you should have 1-2 scenarios written for a single persona following the lab. Finish writing your usage scenarios for each of the personas. Think creatively and critically about "coverage," i.e., all the different ways that you can envision different types of user interacting with your software. Keep it at a high level (no implementation details), and use action verbs where you can.

  - A scenario should describe a situation in which a user interacts with your system, so I'd expect around 2-3 paragraphs each. Each persona should be involved in at least one scenario, and a scenario may involve more than one persona.

  - Add these scenarios to the existing file that you already started writing in Lab.

  - Push up to Github when you're done.

#### Project Management with Trello

In the sprint planning lab, every team member should all have created a [Trello](https://trello.com) account, each with a access to a shared workspace for your project.

- Based on your scenarios, continue defining user stories and populating your `Product Backlog`. Recall that each user story should be formatted as follows,

  ```
  As a <role>, I <want|need> to <do something>
  ```

  ```
  As a <role> I <want|need> to <do something> so that <reason>
  ```

- In aggregate, you should be able to get a good sense of what your software is and does by perusing through the backlog. Remember to prioritize user stories that offer core functionality, as you're supposed to be producing incremental releases every couple weeks.

- When your backlog is sufficiently populated, finish planning out your _sprint_. Each sprint is 2 weeks of development time. As a team, choose the first couple user stories that you believe can be done in the next sprint, and start defining the finer details as programming tasks. Each user story may require several programming tasks for its implementation.

  - Place all sprint tasks into the `Sprint Backlog` on Trello.
  - As instructed in the lab, assign each task to a member for completion, and give it the proper label to organize it under its associated user story.

- **Invite me!** As this is a living document to help you manage your project, there's no set number of tasks that you have to create and assign before the end of lab. However, I do require you to use and update your Trello board over the course of your project. To track your sprints and your progress, I want you to invite me to your board. Press the `Invite` button and search for me using my `pugetsound.edu` email.

#### Submission

There are two items of submission:

1. Make sure that your vision statement, persona, and scenario documents are pushed onto Github (before the 12am deadline). Then send me the link to your repository on [canvas](https://canvas.pugetsound.edu).

2. Invite me to join your Trello workspace.

#### Grading

```
CS 261 Project 1 (Team Graded)

----------------------------------------------------------
[10/10pts] Vision Statement

----------------------------------------------------------

[10/10pts] Persona Statements

----------------------------------------------------------

[30/30pts] Scenarios

> You have multiple scenarios describing at a high level the
various way sin which your personas interact with your system.

----------------------------------------------------------

[30/30pts] User Stories and Backlogs on Trello

> You extracted User Stories from your scenarios and prioritized
them on the product backlog on Trello.

> You selected a sufficient number of Stories to implement in your
initial sprint, and created tasks assigned to individual team
members.

> Task assignment should be of equal work, and should constitiute
around 2-weeks worth of work.

----------------------------------------------------------
[0pts] Misc. Deductions
> Late?

----------------------------------------------------------
Suggestions (No Deductions)


Total:  80 / 80
```
