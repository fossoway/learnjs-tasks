"use strict";

let end = 10;
nextPrimeNum:
    for (let start = 2; start <= end; start += 1) {
        for (let denom = 2; denom < start; denom += 1) {
            if (start % denom === 0) continue nextPrimeNum;
        }
        console.log(start);
}
