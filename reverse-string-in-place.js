let benchmark = require('./helpers/benchmark');
let swap = require('./helpers/swap');


function reverseStringInPlace1(str) {
    let strArr = str.split("");
    let left = 0,
        right = strArr.length - 1;
    while (left < right) {
        swap(strArr, left, right);
        left++;
        right--;
    }
    let outStr = "";
    for (char in strArr) {
        outStr += char;
    }
    return outStr;
}

function reverseStringInPlace2(str) {
    let strArr = str.split("");

    let left = 0,
        right = strArr.length - 1;
    while (left < right) {
        swap(strArr, left, right);
        left++;
        right--;
    }
    return strArr.join("");
}



let test = "This is a test string.";
console.log(reverseStringInPlace2(test));

test = "";
console.log(reverseStringInPlace2(test));

test = "BA";
console.log(reverseStringInPlace2(test));

test = "CBA";
console.log(reverseStringInPlace2(test));



// Array.join is faster than string concatenation for Node 10 ?
// benchmark(() => {
//     for (let i = 0; i < 10000000; i++)
//         reverseStringInPlace1(test);
// });
// benchmark(() => {
//     for (let i = 0; i < 10000000; i++)
//         reverseStringInPlace2(test);
// });
