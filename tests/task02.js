QUnit.module('Task 2 - max of 3 numbers');

QUnit.test('test 1 - positive numbers', function (assert) {
  var out = task02(1, 2, 3);
	assert.equal(out, 3, '3 is a max of 1, 2 and 3');
});

QUnit.test('test 2 - negative numbers', function (assert) {
  var out = task02(-1, -2, -3);
	assert.equal(out, -1, '-1 is a max of -1, -2 and -3');
});

QUnit.test('test 3 - equal numbers', function (assert) {
  var out = task02(2, 2, 2);
	assert.equal(out, 2, '2 is a correct answer');
});

QUnit.test('test 4 - string and numbers', function (assert) {
  var out = task02('-3', '2', 1);	
	assert.equal(out, 2, '2 is a max of "-3", "2" and 1');
});
