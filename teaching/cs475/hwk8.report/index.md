## CS 475 - Operating Systems

### Tech Report
This course teaches broadly the various concepts that show up in modern operating systems, but due to its influence, we've also put a lot of emphasis on UNIX-based operating systems (e.g., Linux). In this assignment you are asked to research and produce report on an OS of your own choosing.

#### Student Outcomes
- To explore the structures of a new operating system.

#### Requirements
Prepare a technical report on an OS of choice. The OS does not have to be current, that is, an exploration of historical operating systems are totally welcome. Among other things, your report must include clear descriptions (e.g., using illustrations when necessary) of the following elements:

  - Describe its process and thread management support. What are the various process/thread states that your OS supports? How does this OS's treatment of processes/threads differ from what you learned in class?
  
  - Describe your OS's CPU scheduling policies. Is it multilevel queueing? If so, what are the various scheduling policies at each level? How does a thread move between levels? You might comment on topics such as fairness, prevention of starvation, treatment of IO-bound vs. CPU-bound processes/threads, etc. Include a discussion of the pros and cons of its scheduling policy.

  - Describe its memory management in detail. What were some major design decisions (e.g., segmentation vs. paging vs. hybrid, etc.) they made, and why? How does the OS enforce protection among multiple processes? How is virtual memory implemented, and what are the policies involved?

  - Pick another topic that is outside the previous three to focus some attention on. This could be I/O devices, file system, and so on.

  - There is a 5 page single-spaced minimum, including all figures and citations. 

  - Your paper should be well-formed, free from grammar and spelling errors. You should not address each of the above points in a list but rather in well constructed paragraphs. Your paper should have an introduction, conclusion and bibliography. You should cite where you discovered the information that you include.

  - And, please don't use ChatGPT to write this report for you. If you use ChatGPT to provide information regarding an OS, please be reminded that its information is sometimes unreliable and flawed. Plus, you do have to cite your sources. You **cannot** cite ChatGPT responses as part of your report. I do not have a preference on the format of your citations.

  - Your report should be submitted as a PDF document that you push to a Github repo.

  <!-- - Describe a filesystem that the OS supports by default. Describe certain structures, such as files' metadata (what and where they're stored), and any policies relating to how related blocks for a file are placed on disk. -->

<!-- If your OS does not support a filesystem, describe any one of your choosing (e.g., FAT32, NTFS, ext3, ext4, HFS, ...). Again, you are welcome to research one that is no longer used but has historical value (like FAT16 or Macintosh Filesystem). For the truly curious, you may also describe a distributed filesystem, such as lustre, NFS, HDFS, ... -->


#### Submitting Your Report
1. Commit and push your PDF document (only PDF) to your Github repo. Make sure your repo is public (or private and accessible by me).

2. On canvas, simply submit the URL to your Github repo. No other form of submission is accepted.


#### Grading
This assignment will be graded out of **50 points**.