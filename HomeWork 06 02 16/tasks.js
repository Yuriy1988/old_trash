'use strict';
function task01(arr) {
    return arr.map(function (num) {
        var result;
        if (num < 0) {
            result = -1;
        } else if (num % 2 === 0) {
            result = 2;
        } else {
            result = 0;
        }
        return result;
    });
}

function task02(arr) {
    var min = Math.min.apply(null, arr),
        max = Math.max.apply(null, arr),
        result = [];

    arr.forEach(function (num, i, arr) {
        if (arr.indexOf(min) < arr.indexOf(max) && num > min && num < max) {
            if (i > arr.indexOf(min) && i < arr.indexOf(max)) {
                result.push(num);
            }
        } else {
            if (i > arr.indexOf(max) && i < arr.indexOf(min)) {
                result.push(num);
            }
        }
    });
    return result;
}

function task03(arr) {
    var average = arr.reduce (function (average, current) {
            return average + current / arr.length;
        }, 0),
        lessThanAverage,
        moreThanAverage,
        result;

    lessThanAverage = arr.filter (function (num) {
        return num < average;
    });

    moreThanAverage = arr.filter (function (num) {
        return num > average;
    });
    return result = [lessThanAverage, moreThanAverage];
}

function task04(arr) {
    var lessThanEights = [],
        moreThanEights = [],
        result = [];

    function sumDigits(num) {
        return Number(String(num)[0]) + Number(String(num)[1]);
    }

    arr.forEach(function (num, i, arr) {
        if (num < 0) {
            lessThanEights.push(num);
        } else {
            if (sumDigits(num) <= 8) {
                lessThanEights.push(num);
            } else {
                moreThanEights.push(num)
            }
        }
    });
    return result = [lessThanEights, moreThanEights];
}
