QUnit.module('Task 1 - convert array\'s numbers: negative to -1; odd to 0; even to 2.' );

QUnit.test('Test 1 - convert all types of numbers', function (assert) {
    var array = [-1, -25, -36, 0, 4, 5, 65, 7, 8],
        out = task01(array),
        convertedArr = [-1, -1, -1, 2, 2, 0, 0, 0, 2];

    assert.deepEqual(out, convertedArr,'array [-1, -25, -36, 0, 4, 5, 65, 7, 8] converted to [-1, -1, -1, 2, 2, 0, 0, 0, 2]');

       });

QUnit.test('Test 2 - convert empty array', function (assert) {
    var array = [],
        out = task01(array),
        convertedArr = [];

    assert.deepEqual(out, convertedArr,'function takes an empty array and returns empty array');

});

QUnit.test('Test 3 -convert array with one element: 0', function (assert) {
    var array = [0],
        out = task01(array),
        convertedArr = [2];

    assert.deepEqual(out, convertedArr,'array [0] converted to array [2] correctly');

});

QUnit.module('Task 01 - Location constructor');

QUnit.test('test - new Location(\'San Francisco\', 22, 10)', function (assert) {
    var out = new Location('San Francisco', 22, 10);
    name = 'San Francisco',
        groups = 22,
        teachers = 10,
        id = 'sanfrancisco_1';

    assert.deepEqual(out.toJSON().name, name, 'Location: San Francisco');
    assert.deepEqual(out.toJSON().groups, groups, 'Groups: ' + 22);
    assert.deepEqual(out.toJSON().teachers, teachers, 'Teachers: ' + 10);
    assert.deepEqual(out.toJSON().id, id, 'id: sanfrancisco_1');
});