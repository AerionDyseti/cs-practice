const ascIntSort = (a, b) => a - b;
const descIntSort = (a, b) => b - a;


// Perform a binary search on an array of integers.
// arr - an array of elements which are comparable using the compareFn.
// searchVal - the value to search for in the Array.
// compareFn - a function which returns: 
//  -1 if the first parameter should be sorted before the second,
//   0 if the two elements are equal,
//   1 if the first parameter should be sorted after the second

function binarySearch(arr, searchVal, compareFn) {

    // Sanity checks and defaults.
    if (arr === undefined) arr = [];
    if (searchVal === undefined) return true;
    if (compareFn === undefined) compareFn = (a, b) => (a < b ? -1 : (a > b ? 1 : 0));

    arr.sort(compareFn);

    // Handle empty array.
    if (arr.length == 0) { return false; }

    // If element does not exist in array.
    if (compareFn(searchVal, arr[0]) < 0 || compareFn(searchVal, arr[arr.length - 1]) > 0) {
        return false;
    }

    const midIndex = Math.floor(arr.length / 2);

    // If the middle element is the correct one, then we are done.
    if (compareFn(searchVal, arr[midIndex]) === 0) {
        return true;
    }

    if (compareFn(searchVal, arr[midIndex]) < 0) {
        return binarySearch(arr.slice(0, midIndex), searchVal, compareFn);
    }
    else {
        return binarySearch(arr.slice(midIndex), searchVal, compareFn);
    }

}

/* Things that could be test:
    What if one or more of the parameters is undefined?

*/
const arr = [1, 0, -22, 3, 5, 10, 66, 123, 200000];
const find = -3000;
console.log(binarySearch(arr, find));


const stringArr = ["a", "xx", "", "foo", "bar", "troz", "narf", "poit", "baz"]
const stringFind = "foot";
console.log(binarySearch(stringArr, stringFind));

const objArr = [{ foo: 0 }, { foo: 123 }, { foo: 1 }, { foo: 0 }];
const objFind = { foo: 2 };
console.log(binarySearch(objArr, objFind, (objA, objB) => objA.foo - objB.foo));
