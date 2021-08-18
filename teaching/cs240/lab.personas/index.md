## CS 240 - Software Engineering

### In-Class Exercise: Personas and Scenarios

By this time, you should have a rough idea of what your term project will be, and it's useful to think about who might be using your product, and in what ways. In this exercise you will be working with your team to write personas and scenarios for your software. This lab is meant to jumpstart the requirements needed for Project 1.

#### Student Outcomes

- To practice the agile design process

#### Part 1 - Writing a Persona

- If you haven't done so already, start by having one of your group members create a new Github project called `cs240-term-project` and clone it down to your machines.

- Think about all the various **types of users** who might use your software, and choose one to write up. A paragraph or two ought to suffice). Personas could be imagined, or they might be representative of potential users that you surveyed/polled. Whichever the case, personas should be based on an understanding of the potential product users, their jobs, their background and their aspirations.

- Here are all the elements you should include for each persona:

  - Details of their education and experience
  - Details of the individual's job
  - Personal information about the user (personalization)
  - Details of their interest in the product (relevance)

- Here is an example of a persona we saw in lecture for the iLearn system:

  ```
  Elena, a school IT technician

  Elena, age 28, is a senior IT technician in a large secondary school (high school) in Glasgow with
  over 2000 students. Originally from Poland, she has a diploma in electronics from Potsdam University.
  She moved to Scotland in 2011 after being unemployed for a year after graduation. She has a Scottish
  partner, no children, and hopes to develop her career in Scotland. She was originally appointed as a
  junior technician but was promoted, in 2014,  to a senior post responsible for all the school computers.

  Although not involved directly in teaching, Elena is often called on to help in computer science
  classes. She is a competent Python programmer and is a ‘power user’ of digital technologies. She has a
  long-term career goal of becoming a technical expert in digital learning technologies and being
  involved in their development. She wants to become an expert in the iLearn system and sees it as an
  experimental platform for supporting new uses for digital learning.
  ```

- I don't have a preference for the format of your document, so feel free to use plaintext `.txt`, or a `.doc`, or a `.pdf` for your persona.

#### Part 2 - Scenarios

- After you've completed writing the persona, start working on some scenarios for him/her.

- Recall that a good scenario should have the following characteristics:

  - A name for the scenario
  - An overall objective, and what's involved in reaching the objective
  - Personas involved
  - Possible ways that the problem can be solved
  - Keep it high-level; No implementation details

- Here's an example scenario for Elena

  ```
  Elena has been asked by David, the head of the art department, to help set up an iLearn environment for
  his department. David wants an environment that includes tools for making and sharing art, access to
  external websites to study artworks, and ‘exhibition’ facilities so that the students’ work can be
  displayed.

  Elena starts by talking to art teachers to discover the tools that they recommend and the art sites
  that they use for studies. She also discovers that the tools they use and the sites they access vary
  according to the age of their students. Consequently, different student groups should be presented
  with a toolset that is appropriate for their age and experience.

  Once she has established what is required, Elena logs into the iLearn system as an administrator and
  starts configuring the art environment using the iLearn setup service. She creates sub-environments
  for three age groups plus a shared environment that includes tools and sites that may be used by all
  students.

  She drags and drops tools that are available locally and the URLs of external websites into each of
  these environments. For each of the sub-environments, she assigns an art teacher as its administrator
  so that they can refine the tool and web site selection that has been set up. She publishes the
  environments in ‘review mode’ and makes them available to the teachers in the art department.

  After discussing the environments with the teachers, Elena shows them how to refine and extend the
  environments. Once they have agreed that the art environment is useful, it is released to all students
  in the school.
  ```

- Use the rest of the class period to write up one or two scenarios for your persona.

- **Note on continued work:** After lab is finished, you and your team must continue to define the remaining personas and scenarios. Each persona should be involved in several scenarios. Your work outside on this outside of class is crucial to the success of your project.
