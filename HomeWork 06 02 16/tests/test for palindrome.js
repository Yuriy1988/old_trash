QUnit.module('check the palindrome');

QUnit.test('test 5 => 11', function (assert) {
    var out = findPalindrome(5);
	assert.equal(out, 11, '5 => 11');
});

QUnit.test('test 12300 => 12321', function (assert) {
    var out = findPalindrome(12300);
    assert.equal(out, 12321, '12300 => 12321');
});

QUnit.test('test => 12421', function (assert) {
    var out = findPalindrome(12375);
    assert.equal(out, 12421, '12375 => 12421');
});

QUnit.test('test 12975 => 13031', function (assert) {
    var out = findPalindrome(12975);
    assert.equal(out, 13031, '12975 => 13031');
});

QUnit.test('test 123300 => 123321', function (assert) {
    var out = findPalindrome(123300);
    assert.equal(out, 123321, '123300 => 123321');
});

QUnit.test('test 123375 => 124421', function (assert) {
    var out = findPalindrome(123375);
    assert.equal(out, 124421, '123375 => 124421');
});

