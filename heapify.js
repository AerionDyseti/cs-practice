let swap = (arr, aIndex, bIndex) => [arr[aIndex], arr[bIndex]] = [arr[bIndex], arr[aIndex]];

// Easier if we use 1-indexing, but we don't want to modify the parameter array.
let getParentIndex = (currentIndex) => {
    return Math.floor((currentIndex - 1) / 2);
};

let getLeftChildIndex = (currentIndex) => {
    return (2 * currentIndex) + 1;
}

let getRightChildIndex = (currentIndex) => {
    return (2 * currentIndex) + 2;
}


// Given an array of numbers, transform it into a (min- or max-) heap.
// Heapify for an arbitrary array runs in O(n log n).
function minHeapify(heapArr) {
    for (let i = 1; i < heapArr.length; i++) {
        let index = i;
        let parentIndex = getParentIndex(i);
        while (heapArr[index] < heapArr[parentIndex]) {
            swap(heapArr, index, getParentIndex(index));
            index = parentIndex;
            parentIndex = getParentIndex(index);
        }
    }
    return heapArr;
}

function removeFromHeap(heapArr) {
    let output = heapArr[0];
    swap(heapArr, 0, heapArr.length - 1);
    let index = 0;
    let childIndex = getChildIndexToSwap(heapArr, index);
    while (childIndex && arr[childIndex] < arr[index]) {
        swap(heapArr, index, childIndex);
        index = childIndex;
        childIndex = getChildIndexToSwap(heapArr, index);
    }
    heapArr.pop();
    return heapArr;
}

function getChildIndexToSwap(heap, index) {
    let leftChildIndex = getLeftChildIndex(index);
    let rightChildIndex = getLeftChildIndex(index);
    if (!heap[rightChildIndex]) { return heap[leftChildIndex] ? leftChildIndex : null; }
    return (heap[leftChildIndex] < heap[rightChildIndex] ? leftChildIndex : rightChildIndex);
}

function addToHeap(heap, num) {
    heap.push(num);
    let index = heap.length - 1;
    let parentIndex = getParentIndex(index);
    while (heap[index] < arr[parentIndex]) {
        swap(heap, index, parentIndex);
        index = parentIndex;
        parentIndex = getParentIndex(index);
    }
    return heap;
}


// We can use this function 
function minHeapifyLast(arr) {

}

let arr = [3, 4, 7, 15, 12, 10];
minHeapify(arr)
console.log(arr);

addToHeap(arr, 1);
console.log(arr);

removeFromHeap(arr);
console.log(arr);