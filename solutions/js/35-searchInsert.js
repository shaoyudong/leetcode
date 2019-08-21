var searchInsert = function(nums, target) {
    return binarySearch(0, nums.length-1, target, nums);
}

function binarySearch(start, end, target, nums) {
    var mid = Math.floor((end + start) / 2);
    if (nums[start] >= target) {
        return start;
    }
    if (nums[end] < target) {
        return end + 1;
    }
    if (nums[end] === target) {
        return end;
    }
    if (nums[mid] === target) {
        return mid;
    }
    if (end - start <= 1) {
        return end;
    }
    if (nums[mid] > target) {
        if (nums[mid-1] < target) return mid;
        if (nums[mid-1] === target) return mid-1;
        return binarySearch(start, mid-1, target, nums);
    } else {
        if (nums[mid+1] >= target) return mid + 1;
        return binarySearch(mid + 1, end, target, nums);
    }
}
var arr = [1,3,5,6];
var arr2 = [1,3]
var arr3 = [3,6,7,8,10]
console.log(searchInsert(arr3, 5))