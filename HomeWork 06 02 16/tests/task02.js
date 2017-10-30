QUnit.module('Task 2 - numbers between min and max in array');

QUnit.test('Test 1 - in array min value is to the left of the max value', function (assert) {
    var array = [34, -5, 220, 40, 300, 122],
        out = task02(array),
        between = [220, 40];

    assert.deepEqual(out, between, '[34, -5, 220, 40, 300, 122] ==> [220, 40]');

});

QUnit.test(' Test 2 - in array max value is to the left of the min value', function (assert) {
    var array = [34, 455, 220, 122, 79, -34, -55, 60],
        out = task02(array),
        between = [220, 122, 79, -34];

    assert.deepEqual(out, between, '[34, 455, 220, 122, 79, -34, -55, 60] ==> [220, 122, 79, -34]');

});

QUnit.test(' Test 3 - in array all numbers are the same', function (assert) {
    var array = [222, 222, 222, 222, 222],
        out = task02(array),
        between = [];

    assert.deepEqual(out, between, '[222, 222, 222, 222, 222] ==> an empty array');

});

QUnit.test(' Test 4 - array of negatives', function (assert) {
    var array = [-3, -22, -7, -2, -4, -1],
        out = task02(array),
        between = [-7, -2, -4];

    assert.deepEqual(out, between, '[-3, -22, -7, -2, -4, -1] ==> [-7, -2, -4]');

});

QUnit.test('Test 5 - array that consists of one number', function (assert) {
    var array = [-3],
        out = task02(array),
        between = [];

    assert.deepEqual(out, between, '[-3] ==> an empty array )');

});

