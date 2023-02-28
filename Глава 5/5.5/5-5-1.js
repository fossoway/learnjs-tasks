"use strict";


function camelize(str) {
    const wordsList = str.split('-');
    return wordsList.map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}
