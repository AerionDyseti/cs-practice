function mergeSort(arr, isSortedFn) {

    // Base Case.
    if (arr.length <= 1)
        return arr;

    // Default sorting.
    if (isSortedFn === undefined) {
        isSortedFn = (a, b) => a < b;
    }

    // Otherwise, find the middle, and do recursive merge sort.
    let midIndex = Math.floor(arr.length / 2),
        lArr = arr.slice(0, midIndex),
        rArr = arr.slice(midIndex);

    return merge(
        mergeSort(lArr, isSortedFn),
        mergeSort(rArr, isSortedFn),
        isSortedFn
    );
}

function merge(lArr, rArr, isSortedFn) {
    let lIndex = 0,
        rIndex = 0,
        result = [];

    while (lIndex < lArr.length || rIndex < rArr.length) {
        let takeLeftElement;

        // Handle case where one or other array is empty.
        if (lIndex == lArr.length) takeLeftElement = false;
        if (rIndex == rArr.length) takeLeftElement = true;

        // If we haven't defined which element to take from the above boundaries, use the Sorting fn.
        takeLeftElement = (takeLeftElement == undefined) ? isSortedFn(lArr[lIndex], rArr[rIndex]) : takeLeftElement;

        if (takeLeftElement) {
            result.push(lArr[lIndex]);
            lIndex++;
        }
        else {
            result.push(rArr[rIndex]);
            rIndex++;
        }
    }

    return result;
}



const intArray = [6, 1, 2, 7, 0, -3];
const stringArray = ["a", "x", "b", "dd", "ddd", "aaaa"];
const objArray = [{ foo: 1 }, { foo: 5 }, { foo: 3 }, { foo: 0 }];

const upSort = (a, b) => a < b;
const downSort = (a, b) => a > b;
const fooSort = (a, b) => a.foo < b.foo;

const numTests = 1000000;
let t = process.hrtime();
for (let i = 0; i < numTests; i++) {
    mergeSort(intArray);
    mergeSort(intArray, upSort);
    mergeSort(intArray, downSort);
    mergeSort(stringArray);
    mergeSort(stringArray, upSort);
    mergeSort(stringArray, downSort);
    mergeSort(objArray, fooSort);
}
t = process.hrtime(t);
console.log(`mergeSort2 took ${t[0] + (t[1] / 1e9)} seconds for ${numTests} tests.`);
