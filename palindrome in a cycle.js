function findPalindrome (num) {

    function reverseValue (num) {
        num = String(num);
        return String(num.split('').reverse().join(''));
    }

    var i;
    for (i = 0; num !== Number(reverseValue(num)); i++) {
        num += 1;
    }

    if (num < 10) {
        num = 11;
    }

    return num;
}


