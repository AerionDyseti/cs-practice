function quickSort(arr) {
    if (arr.constructor !== Array) {
        console.log("This only works on arrays.");
        return;
    }

    if (arr[0] > arr[1] === undefined) {
        console.log("This function only works on elements that can be sorted.");
        return;
    }

    if (arr.length <= 1)
        return arr;

    let leftArray = [], rightArray = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let boop = arr[i] < arr[arr.length - 1];
        if (boop) {
            leftArray.push(arr[i]);
        }
        else {
            rightArray.push(arr[i]);
        }
    }

    return [...quickSort(leftArray), arr[arr.length - 1], ...quickSort(rightArray)];

}



let arrayA = [-1, 2, 3, -5, 0];
let arrayB = [];
let arrayC = [1];
let arrayD = ["A", "C", "F", "Z", "N", "A", "V"];
let notArray = {};
let objArray = [{ foo: "a", bar: "a" }, { foo: "b", bar: "b" }, { foo: "c", bar: "c" }];


console.log(quickSort(arrayA));
console.log(quickSort(arrayB));
console.log(quickSort(arrayC));
console.log(quickSort(arrayD));
console.log(quickSort(notArray));
console.log(quickSort(objArray));