/**
 * Implementation of the software paging unit.
 */
#include "addressTranslation.h"

#include <stdio.h>
#include <stdlib.h>

static pagetable *ptr = NULL; // ptr = "page table register"

void setPageTable(pagetable *pt) {
    ptr = pt;
}

int getPhysical(int logical) {

    char binValue [9];
    char highOrderBits[5];

    itoa (logical,binValue,2);
    printf("binValue: %s\n",binValue);

    memcpy(highOrderBits, &binValue[0], strlen(binValue)-4);
    highOrderBits[strlen(binValue)-4] = '\0';


 

    printf("highOrderBits: %s\n", highOrderBits);

    return 0;
}
