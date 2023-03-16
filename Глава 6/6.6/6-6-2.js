"use strict";


function sum(a) {
    if (!Number.isFinite(a)) return;
    sum.count = a;

    function calc(b){
        if (arguments.length === 0) {
            return sum.count;
        };
        sum.count += b;
        return calc;
    }
    return calc;
}
