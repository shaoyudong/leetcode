var myAtoi = function(str) {
    if (str === '+' || str === '-') return 0;
    if (!/\d/.test(str)) return +str || 0;
    str = str.trim();
    if (/^[^\d+-]/.test(str)) return 0;
    var res = parseInt(str)
    if (res !== res) return 0;
    res = res > 2147483647 ? 2147483647 : res;
    res = res < -2147483648 ? -2147483648 : res;
    return res;
};