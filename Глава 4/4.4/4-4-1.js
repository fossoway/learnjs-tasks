"use strict";


const calculator = {
    read() {
        this.a = +prompt('Введите a');
        this.b = +prompt('Введите b');
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};
