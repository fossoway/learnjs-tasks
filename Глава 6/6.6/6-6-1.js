"use strict";


function makeCounter() {
    let count = 0;
    function counter() {
        return count++;
    }
    counter.decrease = () => count -= 1;
    counter.set = x => {
        count = x;
    };
    return counter;
}
