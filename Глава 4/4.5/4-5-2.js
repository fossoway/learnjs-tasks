"use strict";


function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.newValue = +prompt('Введите число');
        this.value += this.newValue;
    }
}
