class TreeNode {
    constructor(val, leftChild, rightChild) {
        this.val = val;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }
}

function binarySearch(headNode, x, compareFn) {
    if (!headNode) return false;
    if (compareFn(headNode.val, x) === 0) return true;
    return compareFn(x, headNode.val) < 0 ?
        binarySearch(headNode.leftChild, x, compareFn) :
        binarySearch(headNode.rightChild, x, compareFn);
}


let intArray = [];
for (let i = -10; i < 10; i++) {
    if (i % 3)
        intArray.push(i);
}

let tree = arrayToTree(intArray);

for (let i = -10; i < 10; i++) {
    console.log(binarySearch(tree, i, (a, b) => a - b));
}













// HELPER



// Assume sorted array.
function arrayToTree(arr) {

    if (arr.length === 1) {
        return new TreeNode(arr[0]);
    }

    if (arr.length === 0) {
        return;
    }

    let midIndex = Math.floor(arr.length / 2);

    let tree = new TreeNode(arr[midIndex],
        arrayToTree(arr.slice(0, midIndex)),
        arrayToTree(arr.slice(midIndex))
    );
    return tree;
}









