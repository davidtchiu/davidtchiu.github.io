# Note to self
- Insist that final exams are cumulative


# TODO
- SHould I make room for Mongo?

- Make the SQL Labs time for them to work on their SQL homework. In other words, no more separate SQL homework. Just assign it and use the lab time to finish it. (No more University SQL lab). Keep data ingestion hhomework.

- Stress in the beginning that relational model is successful due to it being "non-navigational" The two competing
models were network and hierarchical. Tables were around, but only as a way of presenting data. Spreadsheets
as we know it (Excel, etc.) only became popular while Codd was working on the relational model. The relational model provided a systematic, mathematical framework to manage data relationships, scaling up beyond the capabilities of simple tabular systems or spreadsheets, which were designed for smaller and less complex tasks. Thus, while the idea of tables was present, Codd’s contribution with the relational model was far more sophisticated, providing a foundation for managing complex datasets and relationships at scale in a way that previous data models or early tabular systems couldn’t achieve.

1. Hierarchical Model Example (using pseudo-code)
In the hierarchical model, data is represented as a tree with parent-child relationships. Suppose you have a company database where departments are parents and employees are children.

Hierarchical Structure Example:
scss
Copy code
Company
   └── Department (Marketing)
       └── Employee (John)
       └── Employee (Sarah)
   └── Department (Sales)
       └── Employee (Alice)
       └── Employee (Bob)
In a hierarchical model (e.g., IBM IMS), accessing an employee in the "Marketing" department might look something like this (in pseudo-code):

Pseudo-Code:
plaintext
Copy code
// To retrieve employees in the Marketing department
MOVE TO "Company"
MOVE TO "Department" WHERE NAME = "Marketing"
FOR EACH Employee
    PRINT Employee.NAME
This approach is navigational: you must traverse the tree from parent to child, meaning you'd have to know the structure in advance.

2. Network Model Example (using CODASYL-like syntax)
In the network model, a record can have multiple parents, allowing many-to-many relationships. The data model is often more complex, and the user still navigates through the records.

For example, if you have projects, employees, and departments where employees can work on multiple projects:

Network Model Diagram:
scss
Copy code
Projects
   └── Project A
        └── Employee (John)
   └── Project B
        └── Employee (Sarah)
        └── Employee (John)

Departments
   └── Department (Sales)
        └── Employee (John)
        └── Employee (Alice)
Network Model Pseudo-Code:
In a network database system (like IDMS), retrieving an employee working on a specific project would look like this:

plaintext
Copy code
FIND Project WHERE NAME = "Project A"
FIND ALL Employees IN Project
FOR EACH Employee
    PRINT Employee.NAME
While this model allowed for many-to-many relationships, it was still navigational, meaning you had to explicitly define how to traverse the network of data.


- Incorporate the laptop into all SQL courses and have them follow along and give them small group work.
  - Use lab time to work on homework 4 and move up deadline of Hwk 4.
- There's a lot (too much?) exam 1 practice, between the labs, Hwk, and RGs. How to better balance?
- Redo the study guides so that the topics are listed
- Hwk 6: The .jar file isn't working for anyone.
- Still not doing a good enough job explaining what the 3rd property of 3NF does to include the Dep-preserving relations. Work out a proof using cover Fc

# Change Log
- Split Hwk 2 into two relational algebra assignments (Fall 2024)
- Move exam 1 up a week? Too much going on for students that week though... (Fall 2024)
- Hwk 5 (Joins): now out of core. Only HJ and NLJ. Has schema.txt.
- Hwk 3: be clear that ENG=>ENGL is the only replacement? Or remove it. Be clear that no illegal insert statement shall be generated! (Fall 23)
- Hwk 5: Don't give powerSet. (Fall 23)
- Lec 7: Cut down on Indexing (1st day) and go right into B+Trees (Fall 23)
- Got rid of file lectures (lec 6) to get to transactions (Fall 23)
- Split the SQL lab into two days, two separate weeks (Fall 23)
- Updated board work for theory (Fall 23)
- Make car models into Hwk 4; Make peoplesoft into Lab (6/22)
- Project converted to being more open-ended (6/22)
- Add 3NF and dependency preserving to lectures (6/22)
- Normalization homework converted to programming: FD closure (hwk 5) + BCNF (hwk 6) (5/22)
