"use strict";


let answer = prompt('Введите число больше 100:');
while (+answer <= 100 && answer) {
    answer = prompt('Введите число больше 100:');
}
