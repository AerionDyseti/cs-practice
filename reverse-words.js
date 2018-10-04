let swap = require("./helpers/swap");

function reverseWord(strArr, left, right) {
    while (left < right) {
        swap(strArr, left, right);
        left++;
        right--;
    }
}

function reverseSentence(strArr) {
    reverseWord(strArr, 0, strArr.length - 1);
    let currentWordStart = 0;
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === " ") {
            // End of a word.
            reverseWord(strArr, currentWordStart, i - 1);
            currentWordStart = i + 1;
        }
        if (i == strArr.length - 1) {
            reverseWord(strArr, currentWordStart, i);
        }
    }
    return strArr
}

let test1 = ["m", "e", "s", "s", "a", "g", "e", " ", "a", " ", "i", "s", " ", "t", "h", "i", "s"];
console.log(reverseSentence(test1).join(""));