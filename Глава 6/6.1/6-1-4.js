"use strict";


function printList(list) {
    console.log(list.value);
    if (list.next) {
        printList(list.next);
    }
}
