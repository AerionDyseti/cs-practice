function merge(leftArray, rightArray, isSortedFn) {

    // default sort function, but allow for extension.
    isSorted = (isSortedFn == undefined) ?
        ((a, b) => {
            if (a == undefined) return false;
            if (b == undefined) return true;
            return a < b
        }) :
        ((a, b) => {
            if (a == undefined) return false;
            if (b == undefined) return true;
            return isSortedFn(a, b);
        });


    let result = [],
        leftIndex = 0,
        rightIndex = 0;

    while (leftIndex < leftArray.length || rightIndex < rightArray.length) {
        if (isSorted(leftArray[leftIndex], rightArray[rightIndex])) {
            result.push(leftArray[leftIndex]);
            leftIndex++
        }
        else {
            result.push(rightArray[rightIndex]);
            rightIndex++
        }
    }

    return result;

}


function mergeSort(arr, sortFn) {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, middle);
    const rightArray = arr.slice(middle);

    return merge(
        mergeSort(leftArray, sortFn),
        mergeSort(rightArray, sortFn),
        sortFn
    );
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
console.log(`mergeSort took ${t[0] + (t[1] / 1e9)} seconds for ${numTests} tests.`);
