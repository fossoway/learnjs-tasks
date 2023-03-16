"use strict";


function printNumbers(from, to) {
    let begin = from;

    let timer = setInterval(() => {
        console.log(begin);
        if (begin === to) {
            clearInterval(timer);
        }
        begin += 1;
    }, 1000);
}
