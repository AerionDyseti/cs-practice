function bestProfit(arr) {
    if (arr.length < 2)
        throw new Error("Must have 2 or more elements.");

    let bought = arr[0],
        bestProfit = arr[1] - arr[0];

    for (let i = 2; i < arr.length; i++) {
        bought = Math.min(bought, arr[i - 1]);
        bestProfit = Math.max(bestProfit, arr[i] - bought);
    }
    return bestProfit;
}

let test1 = [10, 7, 5, 8, 11, 9];
console.log(bestProfit(test1));

let test2 = [2, 10, 2, 0, 2];
console.log(bestProfit(test2));

let test3 = [0, 0];
console.log(bestProfit(test3));

let test4 = [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY];
console.log(bestProfit(test4));

let test5 = [9, 8, 7, 6, 5, 4, 3, 2];
console.log(bestProfit(test5));

let test6 = [-Number.MAX_VALUE, Number.MAX_VALUE];
console.log(bestProfit(test6));