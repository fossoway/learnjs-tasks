"use strict";


function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }
    console.log(list.value);
}
