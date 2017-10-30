'use strict';

function checkNum(num) {
    var result;
    if (num  < 0) {
        result = -1;
    } else if (num%2 === 0) {
        result = 2;
    } else {
        result = 0;
    }
    return result;
        }

function task01(arr) {
   return arr.map(checkNum());
}
