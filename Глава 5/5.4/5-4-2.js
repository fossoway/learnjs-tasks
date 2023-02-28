"use strict";


function sumInput() {
    const numbers = [];

    function inputNumber() {
        let answer = prompt('Введите значение:');
        if (answer === "" || answer === null || !isFinite(answer)) {
            return numbers.reduce((acc, item) => acc + item, 0);
        }
        numbers.push(+answer);
        console.log(numbers);
        inputNumber();
    }
    inputNumber();
    return numbers.reduce((acc, item) => acc + item, 0);
}
