// var trap = function(height) {
//     var ans = 0;
//     for (var i = 0, len = height.length; i < len; i++) {
//         var maxL = 0, maxR = 0;
//         for (var j = i; j >= 0 ; j-- ) {
//             maxL = findMax(height[j], maxL);
//         }
//         for (var k = i; k < height.length ; k++ ) {
//             maxR = findMax(height[k], maxR);
//         }
//         ans += min(maxL, maxR) - height[i];
//     }
//     return ans;
// }

// function min(a, b) {
//     return a < b ? a : b;
// }

// function findMax(item, max) {
//     return max <= item ? item : max;
// }

var trap = function(height) {
    var stack = [0];
    for (var i = 1, len = height.length; i < len; i++) {
        if (height[i] <= stack[0]) {
            stack.unshift(i);
        } else {
            var top = stack.shift();
        }
    }
}

var height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height));