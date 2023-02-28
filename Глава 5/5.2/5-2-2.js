"use strict";


function readNumber() {
    let answer = prompt("Введите число");

    while (!isFinite(answer)) {
        answer = prompt("Введите число");
    }

    if (answer === null || answer === '') return null;

    return +answer;
}


readNumber();
