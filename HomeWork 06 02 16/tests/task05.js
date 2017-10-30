QUnit.module('Task 5 - copy of array');

QUnit.test('test 1 - simple copy', function (assert) {
    var array = [1, 2, 3, 4, 5],
	      out = task05(array);
	
	assert.deepEqual(out, array, out + ' is a copy of ' + array);
});

QUnit.test('test 2 - empty array', function (assert) {
    var array = [],
	      out = task05(array);
	
	assert.deepEqual(out, array, '[] is a copy of []');
});

QUnit.test('test 3 - check of non-referece copy', function (assert) {
    var array = [1, 2, 3, 4, 5],
	      out = task05(array);
    
	array[1] = 0;
    array[3] = 0;	
	assert.notDeepEqual(out, array, out + ' is not reference to ' + array);
});

QUnit.test('test 4 - deep copy', function (assert) {
    var array = [1, [2, 3, 4], 5],
	      out = task05(array);
	
	assert.deepEqual(out, array, out + ' is a copy of ' + array);
});