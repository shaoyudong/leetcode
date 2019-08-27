var letterCombinations = function(digits) {
    var map = {
        '2': [97, 99],
        '3': [100, 102],
        '4': [103, 105],
        '5': [106, 108],
        '6': [109, 111],
        '7': [112, 115],
        '8': [116, 118],
        '9': [119, 122]
    }
    for (var i = 0, len = digits.length; i < len; i++) {
        var indexs = map[digits[i]];
        if (indexs) {
            for (var j = indexs[0]; j <= indexs[1]; j++) {

            }
        }
    }
}

var digits = '23452';

console.log(letterCombinations(digits))