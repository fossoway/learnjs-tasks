"use strict";


function sumTo(n) {
    let result = 0;
    for (let i = 0; i <=n; i += 1) {
        result += i;
    }
    return result;
}


function recSumTo(n) {
    if (n <= 1) {
        return 1;
    }
    return n + recSumTo(n - 1);
}


function progSumTo(n) {
    return n * (n + 1) / 2;
}
