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

		  
		  printf("%c", argument[1]);
                  
		  printf("command is %s and arg is %s\n", command, argument);
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
