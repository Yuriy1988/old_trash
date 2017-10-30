QUnit.module('Task 4 - are sum of digits in array\'s values <= 8?');

QUnit.test('Test 1 - array with positive numbers', function (assert) {
    var array = [22, 33, 34, 58, 18],
        out = task04(array),
        result = [[22, 33, 34], [58, 18]];

    assert.deepEqual(out, result, '[22, 33, 34, 58, 18] ==> [22, 33, 34] and [58, 18]');
});

QUnit.test('Test 2 - array with negative numbers', function (assert) {
    var array = [-22, -19, -14, -58, -18, -18],
        out = task04(array),
        result = [[-22, -19, -14, -58, -18, -18], []];

    assert.deepEqual(out, result, '[-22, -19, -14, -58, -18, -18] ==> [-22, -19, -14, -58, -18, -18] and []');
});

QUnit.test('Test 3 - array with positive and negative numbers', function (assert) {
    var array = [-55, 72, 71, -31, 14, 10],
        out = task04(array),
        result = [[-55, 71, -31, 14, 10], [72]];

    assert.deepEqual(out, result, '[-55, 72, 71, -31, 14, 10] ==>[-55, 71, -31, 14, 10] and [72]');
});
