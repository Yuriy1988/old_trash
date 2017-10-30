QUnit.module('Task 4 - sum of digits in arrays\'s values)';

QUnit.test('test 1 - numbers: max in the end of array', function (assert) {
    var array = [1, 2, 3, 4, 5],
	      out = task03(array),	
	      max = 5;
	
	assert.equal(out, max, '5 is a max in ' + array);
});

