// for each element in an array, find the product of all other elements, WITHOUT USING DIVISION.

// O(n) time and O(n) space.
function findProductsExclusive(arr) {

    let results = [];
    let productsBefore = [];
    let productsAfter = [];

    // I know the below steps can probably be condensed to save space, but damned if I can remember how.
    // Still will be O(n), though technically O(3n).

    // Array of all products before current index j.
    for (let j = 0; j < arr.length; j++) {
        if (j == 0)
            productsBefore[j] = 1;
        else
            productsBefore[j] = productsBefore[j - 1] * arr[j - 1];
    }

    // Array of all products after current index j.
    for (let j = arr.length - 1; j >= 0; j--) {
        if (j == arr.length - 1)
            productsAfter[j] = 1;
        else
            productsAfter[j] = productsAfter[j + 1] * arr[j + 1];
    }

    // Multiple them together to get an O(n) time array of all products except for J. 
    // Here we are using Functional, assuming we do not want to mutate the input.
    for (let j = 0; j < arr.length; j++) {
        results[j] = productsBefore[j] * productsAfter[j];
    }

    return results;

}