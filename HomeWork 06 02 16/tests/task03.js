QUnit.module('Task 3 - array converted into two arrays: with numbers less than average, and more than average ');

QUnit.test('Test 1 - array with positive and negative numbers', function (assert) {
    var array = [-1, 2, 4, -6, 8, 15],
        out = task03(array),
        result = [[-1, 2, -6], [4, 8, 15]];

    assert.deepEqual(out, result, 'average is 3.66; [-1, 2, 4, -6, 8, 15] ==> [-1, -6, 2] and [4, 8, 15]');
});

QUnit.test('Test 2 - array with the same numbers', function (assert) {
    var array = [5, 5, 5],
        out = task03(array),
        result = [[], []];

    assert.deepEqual(out, result, 'average is 5; [5, 5, 5] ==> [] and []');
});

QUnit.test('Test 3 - array with negative numbers', function (assert) {
    var array = [-6, -7, -9],
        out = task03(array),
        result = [[-9], [-6, -7]];

    assert.deepEqual(out, result, 'average is -7.33; [-6, -7, -9] ==> [-9] and [-6, -7]');
});

QUnit.test('Test 4 - an empty array', function (assert) {
    var array = [],
        out = task03(array),
        result = [[], []];

    assert.deepEqual(out, result, '[] ==> [] and []');
});

QUnit.test('Test 5 - array with single value', function (assert) {
    var array = [77],
        out = task03(array),
        result = [[], []];

    assert.deepEqual(out, result, '[77] ==> [] and []');
});

