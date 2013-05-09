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
        // JD: This works for parsing one argument, but no more than one.
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

                if (strcmp(command, "cd") == 0) {
                    // JD: This shouldn't even be here---chdir is completely
                    //     a parent-process affair.
                    //
                    //     With that in mind, there shouldn't even *be* a
                    //     fork call if the command is known to be cd.
                    //     That becomes strictly a parent-process activity.
	            chdir(argument);
                    return 0;
                } else {
                    // JD: You don't form the exec call in such a way that
                    //     the command-line arguments get through to it.
                    execlp(command, command, NULL);
                }

            } else {
                /* Parent process. */
                if (strcmp(command, "cd") == 0) {
	          chdir(argument);
                }
                int result;
                // JD: Support for background processes is missing.
                wait(&result);
                printf("All done; result = %d\n\n\n", result);
            }
        }
    }

    return 0;
}
