"use strict";


function inBetween(a, b) {
    return function (x) {
        if (x >= a && x <= b) {
            return true
        }
    }
}


function inArray(arr) {
    return function(x) {
        if (arr.includes(x)) {
            return true
        }
    };
}
