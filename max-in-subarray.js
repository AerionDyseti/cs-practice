// Sliding Window approach. 
function findLargestOfSubArraysSW(inputArray, subarrayLength) {

    let indexQueue = new Deque();
    let outputArray = [];

    // Handle first window.
    for (let i = 0; i < subarrayLength; i++) {
        while (!indexQueue.isEmpty() && inputArray[i] > inputArray[indexQueue.end()]) {
            indexQueue.popBack();
        }
        indexQueue.pushBack(i);
    }
    // add first window maximum to output.
    outputArray.push(inputArray[indexQueue.front()]);

    // Handle all other windows (from inputArray[k] to inputArray[-1]  
    for (let i = subarrayLength; i < inputArray.length; i++) {

        // remove items not in the current window.
        while (!indexQueue.isEmpty() && indexQueue.front() <= i - subarrayLength) {
            indexQueue.popFront();
        }

        // Remove useless elements.
        while (!indexQueue.isEmpty() && inputArray[i] > inputArray[indexQueue.end()]) {
            indexQueue.popBack();
        }
        indexQueue.pushBack(i);

        outputArray.push(inputArray[indexQueue.front()]);

    }

    return outputArray;

}

class Deque {
    constructor() {
        this.stack = [];
        this.end = () => this.stack[this.stack.length - 1];
        this.front = () => this.stack[0];
        this.popBack = () => this.stack.pop();
        this.popFront = () => this.stack.shift();
        this.pushBack = (item) => this.stack.push(item);
        this.pushFront = (item) => this.stack.unshift(item);
        this.isEmpty = () => this.stack.length == 0;
    }
}


let inputArray = [12, 1, 78, 90, 57, 89, 56];
let k = 3;

let result = findLargestOfSubArraysSW(inputArray, k);

console.log(result);
