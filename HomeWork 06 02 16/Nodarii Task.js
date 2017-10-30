'use strict';
for (var i = 0; i < arr.length; i++) {
    (function (elem) {
        arr[i] = function () {
            return elem;
        };
    }(arr[i]));
}
