// Write a function that given an array and to indices, swaps the elements inside the array.

const numTests = 1000000000;
let t1, t2, t3;

console.log("=========================")
console.log("Running %i Tests", numTests);
console.log("=========================")

let stringArray = ["foo", "trolol", "beep", "boop", "bop"];

t1 = time(() => {
    for (let i = 0; i < numTests; i++) {
        for (let j = 0; j < stringArray.length; j++) {
            swapStringInline(stringArray, 0, j);
        }
    }
});

t2 = time(() => {
    for (let i = 0; i < numTests; i++) {
        for (let j = 0; j < stringArray.length; j++) {
            swapTemp(stringArray, 0, j);
        }
    }
});

t3 = time(() => {
    for (let i = 0; i < numTests; i++) {
        for (let j = 0; j < stringArray.length; j++) {
            swapDestructure(stringArray, 0, j);
        }
    }
});

console.log("======== STRING ========")
console.log('Inline manipulation benchmark: %d seconds and %d nanoseconds', t1[0], t1[1]);
console.log('Temporary variable benchmark: %d seconds and %d nanoseconds', t2[0], t2[1]);
console.log('Destructuring benchmark: %d seconds and %d nanoseconds', t3[0], t3[1]);


let integerArray = [1, 3, 6, 55];

t1 = time(() => {
    for (let i = 0; i < numTests; i++) {
        for (let j = 0; j < integerArray.length; j++) {
            swapDestructure(integerArray, 0, j);
        }
    }
});

t2 = time(() => {
    for (let i = 0; i < numTests; i++) {
        for (let j = 0; j < integerArray.length; j++) {
            swapTemp(integerArray, 0, j);
        }
    }
});

console.log("======== INTEGER ========")
console.log('Destructuring benchmark: %d seconds and %d nanoseconds', t1[0], t1[1]);
console.log('Temporary variable benchmark: %d seconds and %d nanoseconds', t2[0], t2[1]);


let objectArray = [
    { foo: "Boop", bar: 1234, baz: true },
    { foo: "Beep", bar: 9876, baz: false },
    { foo: "Boing", bar: 0, baz: true },
    { foo: "Woosh", bar: 123456789, baz: false }
];

t1 = time(() => {
    for (let i = 0; i < numTests; i++) {
        for (let j = 0; j < objectArray.length; j++) {
            swapDestructure(objectArray, 0, j);
        }
    }
});

t2 = time(() => {
    for (let i = 0; i < numTests; i++) {
        for (let j = 0; j < objectArray.length; j++) {
            swapTemp(objectArray, 0, j);
        }
    }
});

console.log("======== OBJECT ========")
console.log('Destructuring benchmark: %d seconds and %d nanoseconds', t1[0], t1[1]);
console.log('Temporary variable benchmark: %d seconds and %d nanoseconds', t2[0], t2[1]);





// Synchronous Timeout function.
function time(fn) {
    var t = process.hrtime();
    fn();
    return process.hrtime(t);
}

// Using Destructuring
function swapDestructure(array, leftIndex, rightIndex) {
    [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]];
}

// Using temporary variable.
function swapTemp(array, leftIndex, rightIndex) {
    const temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = array[temp];
}

// inline using string manip.
function swapStringInline(stringArray, firstIndex, secondIndex) {
    stringArray[firstIndex] += stringArray[secondIndex];
    stringArray[secondIndex] = stringArray[firstIndex].substring(0, stringArray[firstIndex].length - stringArray[secondIndex].length);
    stringArray[firstIndex] = stringArray[firstIndex].substring(stringArray[secondIndex].length, stringArray[firstIndex].length);
}