var threeSum = function(nums) {
    var result = [];
    var map = {}, newNums = [];
    for (var i = 0, len = nums.length; i < len; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
    }
    if (map['0'] >= 3) {
        result.push([0, 0, 0])
    }
    Object.keys(map).sort((a, b) => a - b).forEach((key) => {
        if (map[key] > 1 && +key !== 0) {
            newNums.push(+key);
        }
        newNums.push(+key);
    });
    for (var i = 0, len = newNums.length; i < len; i++) {
        var left = i + 1, right = len - 1;
        while (left < right) {
            if (newNums[i] + newNums[left] + newNums[right] > 0) {
                right--;
            } else if (newNums[i] + newNums[left] + newNums[right] < 0) {
                left++;
            } else {
                result.push([newNums[i], newNums[left], newNums[right]]);
                if (newNums[left] === newNums[left + 1]) {
                    left++;
                }
                left++;
                if (newNums[i] === newNums[i+1]) {
                    i++;
                }
            }
        }
    }
    return result;
}


var nums = [-1, 0, 1, 2, -1, -4];
var nums2 = [-1,0,1,0];
var nums3 = [-2,0,0,2,2];

var nums4 = [-1,0,1,2,-1,-4];
var nums5 = [0, 0, 0];
var nums6 = [1,-1,-1,0];
var nums7 = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];
console.log(threeSum(nums7));
