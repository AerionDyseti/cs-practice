// Complexity O(n) time and O(1) space.
function getMaxProduct(arr) {
    let a = arr[0],
        b = arr[1],
        c = arr[2];

    let maxProfit = a * b * c;

    for (let i = 3; i < arr.length; i++) {

        let bestTwo = Math.max(a * b, a * c, b * c);

        if (bestTwo == a * b && a * b * arr[i] > maxProfit)
            c = arr[i];
        else if (bestTwo == a * c && a * c * arr[i] > maxProfit)
            b = arr[i];
        else if (bestTwo == b * c && b * c * arr[i] > maxProfit)
            a = arr[i];

        maxProfit = a * b * c;
    }

    return maxProfit;
}



// Complexit: O(n*k) time and O(k) space.
function getMaxProductForK(arr, k) {

    if (arr.length < k)
        throw new Error("There must be at least k values.");

    // arr is length n.
    let bestValues = []; // will be length k.
    let maxProduct = 1;

    // Greedily assume first k values are the correct choices.
    for (let i = 0; i < k; i++) {
        bestValues[i] = arr[i];
        maxProduct *= arr[i];
    }

    // for each element in arr...
    for (let i = k; i < arr.length; i++) {

        let candidate = arr[i];
        let bestValueProductsExcept = [];

        // Get maxProduct without each bestValue.
        for (let j = 0; j < k; j++) {
            bestValueProductsExcept[j] = maxProduct / bestValues[j];
        }

        // find the element in chosenValues to replace.
        for (let j = 0; j < k; j++) {

            let potentialMaxProduct = bestValueProductsExcept[j] * candidate;

            // If replacing this element in chosenValues would increase the product, then replace it and break.
            if (potentialMaxProduct > maxProduct) {
                bestValues[j] = candidate;
                maxProduct = potentialMaxProduct;
                break;
            }

        }

    }

    return maxProduct;

}





let test1 = [1, 2, 3, 4];
console.log(getMaxProduct(test1));
console.log(getMaxProductForK(test1, 3));

