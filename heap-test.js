let MinHeap = require('./structures/heap').MinHeap;
let MaxHeap = require('./structures/heap').MaxHeap;
let ArbitraryHeap = require('./structures/heap').ArbitraryHeap;

const numTests = 3;
let testHeapsMin = [];
let testHeapsMax = [];
let testHeapsArbitrary = [];

// Insertion.
for (let i = 0; i < numTests; i++) {

    let testHeapMin = new MinHeap();
    let testHeapMax = new MaxHeap();
    let testHeapArbitrary = new ArbitraryHeap((a, b) => Math.abs(a) < Math.abs(b));

    let heapSize = Math.floor(Math.random() * 10) + 1;
    for (let j = 0; j < heapSize; j++) {
        let x = Math.floor(Math.random() * 21) - 10;
        testHeapMin.insert(x);
        testHeapMax.insert(x);
        testHeapArbitrary.insert(x);
    }
    testHeapsMin.push(testHeapMin);
    testHeapsMax.push(testHeapMax);
    testHeapsArbitrary.push(testHeapArbitrary);
}


// Testing.
let foundError = false;
testHeapsMin.forEach(heap => {
    console.log(heap.toArray());
    if (!checkValidityMin(heap.toArray())) { foundError = true; }
})
console.log("All MinHeaps Good: " + !foundError);

foundError = false;
testHeapsMax.forEach(heap => {
    console.log(heap.toArray());
    if (!checkValidityMax(heap.toArray())) { foundError = true; }
})
console.log("All MaxHeaps Good: " + !foundError);

foundError = false;
testHeapsArbitrary.forEach(heap => {
    console.log(heap.toArray());
    if (!checkValidityArbitrary(heap.toArray())) { foundError = true; }
})
console.log("All ArbitraryHeaps Good: " + !foundError);






function checkValidityMin(heapArray) {
    for (let i = 1; i < heapArray.length; i++) {
        let index = i;
        let parentIndex = Math.floor((index - 1) / 2);
        if (heapArray[index] < heapArray[parentIndex]) return false;
    }
    return true;
}

function checkValidityMax(heapArray) {
    for (let i = 1; i < heapArray.length; i++) {
        let index = i;
        let parentIndex = Math.floor((index - 1) / 2);
        if (heapArray[index] > heapArray[parentIndex]) return false;
    }
    return true;
}

function checkValidityArbitrary(heapArray) {
    for (let i = 1; i < heapArray.length; i++) {
        let index = i;
        let parentIndex = Math.floor((index - 1) / 2);
        if (Math.abs(heapArray[index]) < Math.abs(heapArray[parentIndex])) return false;
    }
    return true;
}