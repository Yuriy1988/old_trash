
function findPalindrome (num) {

    function reverseNum (num) {
        num = String(num);
        return num.split('').reverse().join('');
    }

    function lengthCheck (num) {
        if (String(num).length % 2 === 0) {
            return true;
        }
    }

    var part1,
        part2,
        part3,
        palindrome;

    if (num < 11) {
        palindrome = 11;
    } else {

        if (lengthCheck(num)) {
            part1 = Number(String(num).slice(0, (String(num).length / 2)));
            part2 = Number(String(num).slice((String(num).length / 2)));

            if (Number(part2) > Number(reverseNum(part1))) {
                palindrome = String(part1 + 1) + String(reverseNum(part1 + 1));
            } else {
                palindrome = String(part1) + (reverseNum(part1));
            }

        } else {
            part1 = Number(String(num).slice(0, (String(num).length / 2 - 0.5)));
            part2 = Number(String(num).substr((String(num).length / 2 - 0.5), 1));
            part3 = Number(String(num).slice((String(num).length / 2 + 0.5)));

            if (Number(part3) > Number(reverseNum(part1))) {
                palindrome = String(part1 + 1) + String(part2 + 1) + String(reverseNum(part1 + 1));
            } else {
                palindrome = String(part1) + String(part2) + String(reverseNum(part1));
            }
        }

    }
    return palindrome;
}

