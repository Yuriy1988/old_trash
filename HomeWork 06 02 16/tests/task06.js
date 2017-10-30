QUnit.module('Task 6 - sorting of array');

QUnit.test('test 1 - asc. sorting', function (assert) {
    var array = [0, 2, 1, 4, 3],
	      out = task06(array, 'asc'),
          target = [0, 1, 2, 3, 4];
		  
	assert.deepEqual(out, target, target + ' is a sorted ' + array + ' in asc. order');
});

QUnit.test('test 2 - desc. sorting', function (assert) {
    var array = [0, 2, 1, 4, 3],
	      out = task06(array, 'desc'),
          target = [4, 3, 2, 1, 0];
		  
	assert.deepEqual(out, target, target + ' is a sorted ' + array + ' in desc. order');
});

QUnit.test('test 3 - empty array', function (assert) {
    var array = [],
	      out = task06(array, 'asc'),
          target = [];
		  
	assert.deepEqual(out, target, '[] array is already sorted');
});

QUnit.test('test 4 - string array in asc. sorting', function (assert) {
    var array = ['0', 'a', '1', 'b', '3'],
	      out = task06(array, 'asc'),
          target = ['0', '1', '3', 'a', 'b'];
		  
	assert.deepEqual(out, target, target + ' is a sorted ' + array + ' in desc. order');
});