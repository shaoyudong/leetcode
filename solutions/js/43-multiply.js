var multiply = function(num1, num2) {
    var result = 0;

    num1 = num1.split('').map((n, index) => n * Math.pow(10, num1.length - index - 1))
    num2 = num2.split('').map((n, index) => n * Math.pow(10, num2.length - index - 1))
    console.log(num1, num2)
    
    while (num2.length) {
        var b = num2.pop();
        for (var i = 0; i < num1.length; i++) {
            var a = num1[i];
            result += a * b;
            console.log(a * b, result)
        }
    }
    return result.toString();
}

console.log(multiply('123456789','987654321'))