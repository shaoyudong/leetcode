var convert = function(s, numRows) {
    if (!s) {
        return "";
    }
    if (numRows === 1) {
        return s;
    }
    var arr = [];
    var row = 0;
    var column = 0;
    var direction = 0; // 0 向下 1向上
    var res = '';
    for (var i = 0; i < s.length; i++) {
        arr[row] = arr[row] || [];
        arr[row][column] = s[i];
        if ((row === 0 || !direction) && row !== numRows - 1) {
            direction = 0;
            row++;
        } else {
            direction = 1;
            row--;
            column++;
        }
    }
    for (var i=0; i < arr.length ; i++) {
        for (var j=0; j < arr[i].length; j++) {
            if (arr[i][j]) {
                res += arr[i][j];
            }
        }
    }
    return res;
}


var str = 'AB';

console.log(convert(str, 1));