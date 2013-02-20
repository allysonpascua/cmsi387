#include <linux/timex.h>
#include <linux/types.h>
#include <linux/unistd.h>
#include <stdio.h>

int main(void) {

    printf("Goodbye!\n");
    syscall(1,1);

}
