function quickSort(arr, isSortedFn) {

    isSortedFn = (isSortedFn !== undefined) ? isSortedFn : (a, b) => a < b;

    if (arr.length <= 1)
        return arr;

    let leftArray = [], rightArray = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (isSortedFn(arr[i], arr[arr.length - 1]))
            leftArray.push(arr[i]);
        else
            rightArray.push(arr[i]);
    }

    return [
        ...quickSort(leftArray, isSortedFn),
        arr[arr.length - 1],
        ...quickSort(rightArray, isSortedFn)
    ];

    // Or, more boring...
    // return quickSort(leftArray, sortFn).concat(arr[midIndex]).concat(quickSort(rightArray, sortFn));

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
    quickSort(intArray);
    quickSort(intArray, upSort);
    quickSort(intArray, downSort);
    quickSort(stringArray);
    quickSort(stringArray, upSort);
    quickSort(stringArray, downSort);
    quickSort(objArray, fooSort);
}
t = process.hrtime(t);
console.log(`Quicksort took ${t[0] + (t[1] / 1e9)} seconds for ${numTests} tests.`);
