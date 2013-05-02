Naming Convention for Files:
<Operating System>-<Problem Number>-<Picture Number>


Problem 1. 

linux-1-1

This is a screenshot of the command that runs the first long-running program I was testing.
The first long-running program was java Sum 1234567890 &.
This command executes the Sum.java program with the argument 1234567890 and
runs the command in the background.

linux-1-2

This is a screenshot of the Sum.java program executing.
During its execution, the second long-running program was being entered.
Its command was ping www.google.com
Evidence of its input can be seen roughly halfway through the first command's output.
The line reads as PING www.google.com (74.125.225.180) 56(84) bytes of data
The output of the first command interleaves with the output for the second command.

linux-1-3

This is a screenshot proving/detailing the order of the commands that were input.

windows-1-1

This is a screenshot of the command that runs the first long-running program I was testing.
The first long-running program was ./../thread-posix/a 987654321 &.
This command executes the sum c program with the argument 987654321 and
runs the command in the background.

windows-1-2

This is a screenshot of the sum c program executing.
During its execution, the second long-running program was being entered.
Its command was java Sum 10234567
Evidence of its input can be seen roughly 2/3rds of the way through the first command's output.
The line reads as Starting summation to 10234567
The output of the first command interleaves with the output for the second command.

windows-1-3

This is a screenshot proving/detailing the order of the commands that were input.




Problem 2.

linux-2-1

In this screenshot, the bottom terminal displays the long-running program for this problem.
The command was ./sum 123456789 21345 8879884 456412
This executes the sum c program with the four arguments 123456789 21345 8879884 456412

linux-2-2

In this screenshot, the bottom terminal displays the long-running program executing.
The top terminal displays the command that was input during the long-running program's execution.
The command on the top terminal is ps -e -T | grep sum
This command displays the running threads for all processes with containing the word 'sum'
The only process running that contained the word sum is for the long-running program below.
The process has 5 threads.

windows-2-1

In this screenshot, the left terminal displays the long-running program for this problem,
The command was a 100000 200000 300000 400000
This executes the sum c program with the four arguments 100000 200000 300000 400000

windows 2-2

In this screenshot, the left terminal displays the long-running program executing.
The top right window is for a program called ProcessThreadsView (for Windows).
This program neatly displays details on threads for a selected process.
The process selected was a.exe *32 (i.e. the running process on the left terminal).
Additional details on the process itself can be found on the bottom right window,
in the first row.
The process has 5 threads.  
