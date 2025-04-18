## CS 475 - Operating Systems

### Tech Report
This course teaches broadly the various concepts that show up in modern operating systems, but due to its influence, we've also put a lot of emphasis on UNIX-based operating systems (e.g., Linux). In this assignment you are asked to research and produce report on an OS (or an OS breakthrough) of your own choosing.

#### Student Outcomes
- To explore the structures of a new (or classical) operating system.

#### Topics
For this assignment, you have an option of: (1) exploring an OS of your choice, or (2) to explain a classic OS paper.

If you're working on option #1, the OS does not have to be current, that is, explaining an historical operating systems are totally welcome. Among other things, your report must include clear descriptions (e.g., using illustrations when necessary) of the following elements:

  - Describe its process and thread management support. What are the various process/thread states that your OS supports? How does this OS's treatment of processes/threads differ from what you learned in class?
  
  - Describe your OS's CPU scheduling policies. Is it multilevel queueing? If so, what are the various scheduling policies at each level? How does a thread move between levels? You might comment on topics such as fairness, prevention of starvation, treatment of IO-bound vs. CPU-bound processes/threads, etc. Include a discussion of the pros and cons of its scheduling policy.

  - Describe its memory management in detail. What were some major design decisions (e.g., segmentation vs. paging vs. hybrid, etc.) they made, and why? How does the OS enforce protection among multiple processes? How is virtual memory implemented, and what are the policies involved?
  
    - Because memory management is the last topic we lecture on, your report must cover it deeply. This means you have to choose an OS that does some kind of memory management scheme: paging, segmentation, buddy system, etc. OS using identity based mapping (i.e. no virtual addressing) will not be acceptable. (That means you, TempleOS.)

  - Pick another topic that is outside the previous three to focus some attention on. This could be I/O devices, file system, etc.

  - An incomplete list of OS's explored by former students include:
    - FreeRTOS, iOS, Linux and UNIX variants, Osker, WebOS, Windows 95, Windows 11, Xinu

  <!-- - Describe a filesystem that the OS supports by default. Describe certain structures, such as files' metadata (what and where they're stored), and any policies relating to how related blocks for a file are placed on disk. -->

<!-- If your OS does not support a filesystem, describe any one of your choosing (e.g., FAT32, NTFS, ext3, ext4, HFS, ...). Again, you are welcome to research one that is no longer used but has historical value (like FAT16 or Macintosh Filesystem). For the truly curious, you may also describe a distributed filesystem, such as lustre, NFS, HDFS, ... -->

If you're working on option #2, it could be a paper covering any topic we've talked about in class, or something new! The requirements are that the paper you choose is published by a recoginized organization (such as ACM, IEEE, USENIX), and considered to be a classic. Here are some ideas:

  - [Belady's anomaly](https://dl.acm.org/doi/10.1145/363011.363155)
  - [UNIX paper](https://dsf.berkeley.edu/cs262/unix.pdf)
  - Choose a topic from a plethora of [Multics papers](https://multicians.org/papers.html)
  - Here's another cache of [classic systems papers ](https://pdos.csail.mit.edu/~ganger/classic.html)
  - You might also choose a newer systems paper, like on Cloud Computing,  MapReduce, HDFS, etc.

If choosing this route, your goal would be to write an "expository paper" aiming to inform, explain, describe, or clarify ideas and concepts to a more general CS audience (perhaps aiming toward informing someone who has a CS background, but has not taken OS). Its primary purpose is to present information in a clear and logical manner, allowing the reader to understand and learn about a specific topic without your personal opinions influencing the content.


# Requirements
  - There is a 4 page single-spaced minimum, including all figures and citations. 

  - Your paper should be well-formed, free from grammar and spelling errors. You should not address each of the above points in a list but rather in well constructed paragraphs. Your paper should have an introduction, conclusion and bibliography. You should cite where you discovered the information that you include.

  - And, please don't use ChatGPT to write this report for you. If you use ChatGPT to provide information regarding an OS, please be reminded that its information is sometimes unreliable and flawed. Plus, you do have to cite your sources. You **cannot** cite ChatGPT responses as part of your report. I do not have a preference on the format of your citations.

  - Your report should be submitted as a PDF document that you push to a Github repo.



#### Submitting Your Report
1. Commit and push your PDF document (only PDF) to your Github repo. Make sure your repo is public (or private and accessible by me).

2. On canvas, simply submit the URL to your Github repo. No other form of submission is accepted.


#### Grading
This assignment will be graded out of **50 points**.