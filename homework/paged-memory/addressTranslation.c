/**
 * Implementation of the software paging unit.
 */
#include "addressTranslation.h"

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

static pagetable *ptr = NULL; // ptr = "page table register"

void setPageTable(pagetable *pt) {
    ptr = pt;
}

int getPhysical(int logical) {

    int physical;

    if (logical < 0 || logical > 255) {
        printf("getPhysical(%d) = ERR_OUT_OF_RANGE\n", logical);
        return -1; //ERR_OUT_OF_RANGE
    }

    int highOrderBits = logical >> 4;
    int lowOrderBits = logical & 0xf;

    if (ptr[highOrderBits].valid == 0) {
        printf("getPhysical(%d) = ERR_INVALID\n", logical);
        return -2; //ERR_INVALID
    }
    else {
        physical = ptr[highOrderBits].frame << 4;
        physical = physical | lowOrderBits;
        printf("getPhysical(%d) = %d\n", logical, physical);
        return physical;
    }

}
