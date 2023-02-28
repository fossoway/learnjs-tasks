"use strict";


function pow(x, n) {
    if (n < 1) {
        return `${n} не натуральное число`;
    }
    return x ** n;
}

let x = +prompt("Введите число");
let n = +prompt("Введите степень");

alert(pow(x, n));
