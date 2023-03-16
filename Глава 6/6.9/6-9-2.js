"use strict";


function delay(f, time) {
    return function() {
        setTimeout(() => f.apply(this, arguments), time);
    };
}
