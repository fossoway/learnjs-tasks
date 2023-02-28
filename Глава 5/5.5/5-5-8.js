"use strict";


function getAverageAge(users) {
    return users.reduce((acc, user) => acc + user.age, 0) / users.length;
}
