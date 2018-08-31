function quickSort(arr, isSortedFn) {
    if (arr.length <= 1)
        return arr;

    if (isSortedFn === undefined) {
        isSortedFn = (a, b) => a < b;
    }

    let midIndex = Math.floor(arr.length / 2);

    // Median of Three approximation.
    if (!isSortedFn(arr[0], arr[midIndex]))
        [arr[0], arr[midIndex]] = [arr[midIndex], arr[0]];

    if (!isSortedFn(arr[arr.length - 1], arr[midIndex]))
        [arr[arr.length - 1], arr[midIndex]] = [arr[midIndex], arr[arr.length - 1]];

    if (!isSortedFn(arr[0], arr[arr.length - 1]))
        [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

    let lArr = [],
        rArr = []

    for (let i = 0; i < arr.length; i++) {
        if (i == midIndex) continue;
        if (isSortedFn(arr[i], arr[midIndex]))
            lArr.push(arr[i]);
        else
            rArr.push(arr[i]);
    }

    return [
        ...quickSort(lArr, isSortedFn),
        arr[midIndex],
        ...quickSort(rArr, isSortedFn)
    ];

    // Or, more boring...
    // return quickSort(lArr, sortFn).concat(arr[midIndex]).concat(quickSort(rArr, sortFn));

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
console.log(`Quicksort2 took ${t[0] + (t[1] / 1e9)} seconds for ${numTests} tests.`);
