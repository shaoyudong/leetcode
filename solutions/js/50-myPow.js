var myPow = function(x, n) {
    if (n > 0) {
        if (n === 1) return x;
        return x * myPow(x, n - 1);
    } else if (n < 0) {
        if (n === -1) return 1 / x;
        return 1 / x * myPow(x, n + 1);
    } else {
        return 1;
    }
}

var num = 2;
console.log(myPow(1.00001, 123456))