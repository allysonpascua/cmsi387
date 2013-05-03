#include <sys/types.h>
#include <stdio.h>
#include <string.h>
#include <unistd.h>

/**
 * This program demonstrates the use of the fork() and exec()
 * functions.
 */
int main() {

    /* String to hold the command to run. */
    char command[256];
    char argument[256];
    pid_t pid;
 
    while (!feof(stdin)) {
        printf("Enter the command to run: ");
        int commandCount = scanf("%s%[^\n]s", command, argument);

        //remove space character in argument
        memmove(argument, argument+1, strlen(argument));

        if (commandCount != -1) {

            pid = fork();

            if (pid < 0) {
                /* Error condition. */
                fprintf(stderr, "Fork failed\n");
                return -1;

            } else if (pid == 0) {
                /* Child process. */
                printf("Running...\n");

                // JD: Consider this: you are changing the directory within
                //     the child.  That means the parent stays on the same
                //     directory.  After the child returns from a chdir, it
                //     leaves the if statement and then...returns to the top
                //     of the loop.  Think about this---is this the correct
                //     behavior?  Meanwhile, what is the parent doing?
                //
                //     For an additional data point, run your shell and run
                //     some correct commands.  On another terminal do a ps
                //     and note the processes that are running.  Then, do
                //     a cd command (on your shell).  Take a look at the
                //     processes after that.  Think about whether what you
                //     see at that point looks correct.
                if (strcmp(command, "cd") == 0) {             
		    chdir(argument);
                    int result;
                    wait(&result);
                    printf("All done; result = %d\n\n\n", result);
                } else {
                    execlp(command, command, NULL);
                }

            } else {
                /* Parent process. */
                int result;
                wait(&result);
                printf("All done; result = %d\n\n\n", result);
            }
        }
    }

    return 0;
}
