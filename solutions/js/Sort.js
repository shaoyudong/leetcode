var arr = [3,1,2,7,5,6,3,2,9,8];

function quick(arr, left, right) {
    if (left >= right) return;
    var l = left, r = right, flag = arr[left];
    while (l < r) {
        while (arr[r] >= flag && l < r) {
            r--;
        }
        while (arr[l] <= flag && l < r) {
            l++;
        }
        if (l < r) {
            var temp = arr[r];
            arr[r] = arr[l];
            arr[l] = temp;
        }
    }
    arr[left] = arr[l];
    arr[l] = flag;
    quick(arr, left, l - 1);
    quick(arr, l + 1, right);
}

// quick(arr, 0, arr.length - 1);

function insert(arr) {
    for (var i = 1; i < arr.length; i++) {
        var insertItem = arr[i];
        var index = i;
        while (index > 0 && insertItem < arr[index-1]) {
            arr[index] = arr[index - 1];
            index--;
        }
        arr[index] = insertItem;
    }
}
// insert(arr);

function bubble(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

// bubble(arr);

function select(arr) {
    // for (var i = 0; i < arr.length; i++) {
    //     var minIndex, maxIndex, min = Infinity, max = -Infinity;
    //     for (var j = i; j < arr.length - i; j++) {
    //         if (arr[j] > max) {
    //             max = arr[j], maxIndex = j;
    //         } 
    //         if (arr[j] < min) {
    //             min = arr[j], minIndex = j;
    //         }
    //     }
    //     if (minIndex && maxIndex) {
    //         var temp = arr[i];
    //         arr[i] = arr[minIndex];
    //         arr[minIndex] = temp;
    //     }
    //     if (minIndex && maxIndex) {
    //         var temp = arr[arr.length - i - 1];
    //         arr[arr.length - i - 1] = arr[maxIndex];
    //         arr[maxIndex] = temp;
    //     }
    //     console.log(i, min, max, minIndex, maxIndex, arr);
    // }
}

// select(arr);

console.log(arr);