/**
 * Given a rotated sorted array of integers, and a number n, write an algorithm to find the number in the array.
    Sorted Array: [ 1, 2, 3, 4, 5, 6]
    Rotated Sorted Array [ 3, 4, 5, 6, 1, 2]

    Assumptions: This is a search algorithm-- we don't want to know the index of the number, just if it exists.
    Assumptions: The array passed in will be a valid array of 0 or more integers (and only integers).
    Assumptions: The array will not contain duplicate numbers.
    Assumptions: The array passed in will fit in memory (as will all of it's elements).

    I first started with the obvious brute force solution, which is to iterate through the array. 
    This would be O(n) time, so I knew that was the complexity to beat.

    If the Array were not rotated, I recognized that I would perform a Binary Search on it, but that the binary search
    algorithm wouldn't work because of the rotation. However, modifying it to search the 'greater than' partition
    if the number was less than the number at index 0 meant that we could do this search in O(log n) time.
 * 
 */

function isNumInArray(rotArr, num) {
    if (rotArr.length < 1) return false;
    if (rotArr.length == 1) return rotArr[0] == num;
    let midIndex = Math.floor(rotArr.length / 2);
    if (rotArr[midIndex] == num || rotArr[0] == num) { // Could possibly optimize by checking last index, too?
        return true;
    }
    if (num < rotArr[0] || num > rotArr[midIndex]) {
        return isNumInArray(rotArr.slice(midIndex), num);
    }
    return isNumInArray(rotArr.slice(1, midIndex), num);

}



let arr = [3, 4, 5, 6, 1, 2];
console.log(isNumInArray(arr, 5));
console.log(isNumInArray(arr, 2));
console.log(isNumInArray(arr, 7));
console.log("-----");
arr = [];
console.log(isNumInArray(arr, 5));
console.log(isNumInArray(arr, 2));
console.log(isNumInArray(arr, 7));
console.log("-----");
arr = [1, 2];
console.log(isNumInArray(arr, 1));
console.log(isNumInArray(arr, 2));
console.log(isNumInArray(arr, 3));
console.log("-----");
arr = [2];
console.log(isNumInArray(arr, 1));
console.log(isNumInArray(arr, 2));
console.log(isNumInArray(arr, 3));
