function rgbSort(arr) {
    let left = 0,
        mid = 0,
        right = arr.length - 1;

    while (right > mid) {
        while (arr[left] == 'R') left++;
        while (arr[right] == 'B') right--;

        if (arr[mid] == 'R') {
            swap(arr, mid, left);
            mid++;
        }
        else if (arr[mid] == 'B') {
            swap(arr, mid, right);
        }
        else if (arr[mid] == 'G') {
            mid++;
        }

    }
}


function swap(arr, aIndex, bIndex) {
    [arr[aIndex], arr[bIndex]] = [arr[bIndex], arr[aIndex]]
}




let test1 = ['G', 'B', 'R', 'R', 'B', 'R', 'G'];
rgbSort(test1);
console.log(test1);

