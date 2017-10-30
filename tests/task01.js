QUnit.module('Task 1 - sum of two numbers');

QUnit.test('test 1 - positive numbers', function (assert) {
  var out = task01(1, 1);
	assert.equal(out, 2, '1 + 1 = 2');
});

QUnit.test('test 2 - negative numbers', function (assert) {
  var out = task01(-1, 1);
	assert.equal(out, 0, '-1 + 1 = 0');
});

QUnit.test('test 3 - string and number', function (assert) {
  var out = task01('1', 1);	
	assert.equal(out, 2, '"1" + 1 = 2');
});
