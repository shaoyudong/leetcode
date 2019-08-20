function findMedianSortedArrays(nums1, nums2) {
    var len1 = nums1.length;
    var len2 = nums2.length;
    var isOdd = ((len1 + len2) % 2 === 1);
    var medianIndex = (isOdd ? (len1 + len2 + 1) / 2 : (len1 + len2)/2) - 1;
    var i = 0;
    while (nums1.length && nums2.length) {
        var temp;
        if (nums1[0] <= nums2[0]) {
            temp = nums1.shift();
        } else {
            temp = nums2.shift();
        }
        if (i === medianIndex) {
            if (isOdd) {
                return temp;
            } else {
                var nextTemp;
                if (nums1.length && nums2.length) {
                    if (nums1[0] <= nums2[0]) {
                        nextTemp = nums1.shift();
                    } else {
                        nextTemp = nums2.shift();
                    }
                } else {

                    if (!nums1.length) {
                        nextTemp = nums2.shift();
                    } else if (!nums2.length) {
                        nextTemp = nums1.shift();
                    }
                    
                }
                return (temp + nextTemp) / 2
            }
        }
        i++;
    }
    while (nums1.length) {
        temp = nums1.shift();
        if (i === medianIndex) {
            if (isOdd) {
                return temp;
            } else {
                return (temp + nums1.shift())/2;
            }
        }
        i++;
    }
    while (nums2.length) {
        temp = nums2.shift();
        if (i === medianIndex) {
            if (isOdd) {
                return temp;
            } else {
                return (temp + nums2.shift())/2;
            }
        }
        i++;
    }
    
}

var arr1 = [1,3, 4, 5 , 6, 7,8, 9];
var arr2 = [2];

console.log(findMedianSortedArrays(arr1, arr2));