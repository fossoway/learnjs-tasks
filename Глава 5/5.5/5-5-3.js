"use strict";


function filterRangeInPlace(arr, a, b) {
    arr.forEach((item, index) => {
        if (item < a || item > b) {
            arr.splice(index, 1);
        }
    })
}
