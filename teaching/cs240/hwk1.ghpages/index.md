## CS 240 - Software Engineering

### Homework: Personal Homepage on github.io

In this assignment you'll create a personal homepage on Github's free web hosting service, github.io. The purpose of this assignment is to try to ensure that you understand the basics of HTML, CSS, and git. It also prepares you for the process of submitting future assignments in this course, as we will be working exclusively with git and github for the remainder of this course.

#### Student Outcomes

- Use of HTML and CSS
- Exposure to various git operations and Github

#### Program Requirements

For full credit, your project should observe the following requirements.

- By this time, you should already have an account on Github. If you still don't have an account, [create one now](https://github.com/). Sign in to github, and create a new repository called `yourUserName.github.io` where `yourUserName` is your github username. This is where the code for your homepage will live once you push it up.

- If you're reading online tutorials on how to create a Github page, ignore all references to their markdown (.md) support. You are required to do this assignment using HTML and CSS that _you_ write.

- You'll be creating a live webpage here: [https://yourUserName.github.io](https://yourUserName.github.io).

- On your local machine, create a new project in VS Code and have git manage it. Rename your local branch from `master` to `main` for compability with Github.

- Working in VS Code, you are to create the following documents. As you're editing your homepage, make commits often, as you will be graded on the frequency and quality of your commit messages. The commit messages don't need to be long, but you should be able to trace your steps by viewing them.

  - `index.html` file is your landing (home) page. You are required to upload and show an image of yourself, and write a little about who you are. You don't have to write a novel -- just a few paragraph synopsis will do.

  - `default.css` file should contain some CSS elements to style your homepage. You can style it however you like. In other words, I won't be grading on "good" design. Though, it should be emphasized that this page will be "live" and goal of this assignment is to introduce to the online world who you are as a software developer, so you might want to make sure it looks presentable. Inside this file, there should be:

    - At least 2 element selectors and 1 class selector
    - You must style your paragraphs to use helvetica point 10 font.
    - You must style your image to have a solid border, and set to the left of your self-summary.

  - After you've styled your homepage to your liking, commit and push to github. It can take 1-2 minutes for the upload to take affect, but check your website in your browser to see. Let's work on your resume on a separate branch. Create a new git branch locally called `resume` and switch to it.

  - `resume.html` file serves as your resume. You must link to it from your index page. To put yourself in the right mindset, suppose that you're in the early stages applying for an internship, job, grad school, etc. Place your name and contact info (you don't have to put your physical addresson there) in the heading. Following that, these sections must be included in this order:

    - Education: List your collegiate history here; your major and minor (if you've declared -- write "undeclared" if you haven't). You do not need to share your GPA.
    - Experience: List any relevant work history and/or leadership/volunteering experiences here. A title and a short one-paragraph synopsis per item will be sufficient per item.
    - Coursework: List your CS and CS-adjacent (such as Math) courses here. Use an unordered list containing course number and course title.
    - Technical Projects: List any significant technical projects here. A title and short one-paragraph synopsis per project will be sufficient. Since it's so early in your studies, you can just list some CS 1 or CS 2 projects here.
    - Affiliations: List any academic clubs you might be a part of, including athletics and Greek life.

  - After you're done with the content, merge the `resume` branch to the `main` branch and commit and push, but don't remove the `resume` branch.

#### Optional Extensions

Have some free time? There's no limitations to the content you want to display. Feel free to make more pages about yourself, and add as much styling as you wish! As long as your site meets the requirements, you will be receive full credit!

#### Grading

```
CS 240 Homework (Github Pages)


----------------------------------------------------------
[20/20pts] Content

> You wrote all HTML and CSS yourself (without using some
  code generation tool). Your CSS abides by above the
  requirements.

> You included an image of yourself, with proper styling.

> Your resume is linked from your home page, and includes
  the sections listed in the requirements.

----------------------------------------------------------
[10/10pts] Commit History

> You are making and pushing commits at regular intervals
and with substantive, detailed commit messages.

----------------------------------------------------------
[0pts] Misc. Deductions
> Late?

----------------------------------------------------------
Suggestions (No Deductions)


Total: 30 pt
```
