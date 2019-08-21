function lengthOfLongestSubstring(s) {
    var nextIndex = 0;
    var maxLen = 0;
    var len = 0;
    while (nextIndex < s.length && nextIndex !== -1) {
        [len, nextIndex] = getSubStrLen(nextIndex, s);
        if (len > maxLen) maxLen = len;
    }
    return maxLen;
}

function getSubStrLen(startIndex, s) {
    var index = startIndex;
    var map = {
        [s[startIndex]]: startIndex
    }
    var nextIndex = -1;
    while (index < s.length) {
        index++;
        if (typeof map[s[index]] !== 'undefined') {
            nextIndex = map[s[index]] + 1;
            break;
        }
        map[s[index]] = index;
    }
    return [index - startIndex, nextIndex];
}

var str = 'abcabcbb';
console.log(lengthOfLongestSubstring(str));