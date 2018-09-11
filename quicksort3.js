function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const lArr = [];
    const rArr = [];
    let pivotIndex = Math.floor(arr.length / 2);
    for (let num of arr) {
        if (num === arr[pivotIndex]) continue;
        if (num < arr[pivotIndex])
            lArr.push(num);
        else
            rArr.push(num);
    }

    return [
        ...quickSort(lArr),
        arr[pivotIndex],
        ...quickSort(rArr)
    ];
}


const intArray = [6, 1, 2, 7, 0, -3];

const numTests = 1000000;
let t = process.hrtime();
for (let i = 0; i < numTests; i++) {
    quickSort(intArray);
}
t = process.hrtime(t);
console.log(`Quicksort3 took ${t[0] + (t[1] / 1e9)} seconds for ${numTests} tests.`);

