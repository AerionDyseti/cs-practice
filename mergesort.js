function merge(leftArray, rightArray, sortFn) {

    // default sort function, but allow for extension.
    sortFn = sortFn || ((a, b) => {
        if (a == undefined) return false;
        if (b == undefined) return true;
        return a < b
    });

    let result = [],
        leftIndex = 0,
        rightIndex = 0;

    while (leftIndex < leftArray.length || rightIndex < rightArray.length) {
        if (sortFn(leftArray[leftIndex], rightArray[rightIndex])) {
            result.push(leftArray[leftIndex]);
            leftIndex++
        }
        else {
            result.push(rightArray[rightIndex]);
            rightIndex++
        }
    }

    return result;

}


function mergeSort(arr, sortFn) {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, middle);
    const rightArray = arr.slice(middle);

    return merge(
        mergeSort(leftArray, sortFn),
        mergeSort(rightArray, sortFn),
        sortFn
    );
}



const intArray = [1, 2, 7, -2, 0, 0, 122];
console.log(mergeSort(intArray));

const stringArray = ["a", "c", "z", "xx", "xy", "aaa"];
console.log(mergeSort(stringArray));


const objArray = [{ foo: 1 }, { foo: 2 }, { foo: 0 }, { foo: -22 }, { foo: 5 }];
const objSortFn = (objA, objB) => {
    if (objA == undefined) return false;
    if (objB == undefined) return true;
    return objA.foo < objB.foo;
}


console.log(mergeSort(objArray, objSortFn));


