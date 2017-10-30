QUnit.module('Task 3 - max element in array');

QUnit.test('test 1 - numbers: max in the end of array', function (assert) {
    var array = [1, 2, 3, 4, 5],
	      out = task03(array),	
	      max = 5;
	
	assert.equal(out, max, '5 is a max in ' + array);
});

QUnit.test('test 2 - numbers: max in the begin of array', function (assert) {
    var array = [5, 4, 3, 2, 1],
	      out = task03(array),	
	      max = 5;
	
	assert.equal(out, max, '5 is a max in ' + array);
});

QUnit.test('test 3 - numbers: max in the middle of array', function (assert) {
    var array = [1, 2, 3, 2, 1],
	      out = task03(array),	
	      max = 3;
	
	assert.equal(out, max, '3 is a max in ' + array);
});

QUnit.test('test 4 - strings and numbers: equal array', function (assert) {
    var array = [3, '3', 3, '3', 3],
	      out = task03(array),	
	      max = 3;
	
	assert.equal(out, max, '3 is a max in ' + array);
});
