function longestPalindrome(s) {
    var maxLen = 1;
    var maxSub = '';
    for (var i = 0; i + (maxLen - 1) < s.length; i++) {
        var [subLen, sub] = findSubPalindrome(i, s);
        if (subLen >= maxLen) {
            maxLen = subLen;
            maxSub = sub;
        }
    }
    return maxSub;
}

function findSubPalindrome(startIndex, str) {
    for (var i = str.length - 1; i >= startIndex; i--) {
        var sub = str.substring(startIndex, i+1);
        if (isPalindrome(sub)) {
            return [sub.length, sub];
        }
    }
    return [-1, ''];
}

function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    var i = 0;
    while (i < str.length / 2) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
        i++;
    }
    return true;
}

var s = "abcdbbfcba"
console.log(longestPalindrome(s))
// console.log(findSubPalindrome(4, s))