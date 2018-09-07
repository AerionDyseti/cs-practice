function merge(lArr, rArr) {
    let lIndex = 0;
    let rIndex = 0;
    let sortedArr = [];
    while (lIndex < lArr.length || rIndex < lArr.length) {
        if (lArr[lIndex] == undefined) {
            sortedArr.push(rArr[rIndex]);
            rIndex++;
        }
        else if (rArr[rIndex] == undefined) {
            sortedArr.push(lArr[lIndex]);
            lIndex++;
        }
        else if (lArr[lIndex] < rArr[rIndex]) {
            sortedArr.push(lArr[lIndex]);
            lIndex++;
        }
        else {
            sortedArr.push(rArr[rIndex]);
            rIndex++;
        }
    }
    return sortedArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let midIndex = Math.floor(arr.length / 2);
    return merge(
        mergeSort(arr.slice(0, midIndex)),
        mergeSort(arr.slice(midIndex))
    )

}

const intArray = [6, 1, 2, 7, 0, -3];

const numTests = 1000000;
let t = process.hrtime();
for (let i = 0; i < numTests; i++) {
    mergeSort(intArray);
}
t = process.hrtime(t);
console.log(`Quicksort3 took ${t[0] + (t[1] / 1e9)} seconds for ${numTests} tests.`);

