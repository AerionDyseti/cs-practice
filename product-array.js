/**
 * Obvious answer (bad because is quadratic time): Loop through element, then loop through each other element and get product, 
 * stick in output array.
 */
function GetOtherProduct(inputArray) {
    let outputArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        let product = 1;
        for (let j = 0; j < inputArray.length; j++) {
            if (j !== i) {
                product *= inputArray[j];
            }
        }
        outputArray[i] = product;
    }
    return outputArray;
}


/**
 * We can do it in O(2n) if we get the full product once and then divide by each step:
 */
function GetOtherProductDivison(inputArray) {
    let totalProduct = inputArray.reduce((a, b) => a * b);
    return inputArray.map(n => totalProduct / n);
}


/**
 * Challenge to do this without division. The trick is to get two arrays, 
 * one representing all the products that are indexed before the item, 
 * and another with all the items that are indexed after it. 
 * Then you can multiple each element of the two resultant arrays to get it.
 * 
 * This is O(3n) in time. Can do in O(1) space, but it's less clear.
 */
function GetOtherProductWithoutDivision(inputArray) {

    let product = 1;
    let productsBefore = [];
    for (let i = 0; i < inputArray.length; i++) {
        productsBefore[i] = product;
        product *= inputArray[i];
    }

    product = 1;
    let productsAfter = [];
    for (let i = inputArray.length - 1; i >= 0; i--) {
        productsAfter[i] = product;
        product *= inputArray[i];
    }

    let outputArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        outputArray[i] = productsBefore[i] * productsAfter[i];
    }
    return outputArray;

}


console.log(JSON.stringify(GetOtherProduct([4])));
console.log(JSON.stringify(GetOtherProductDivison([4])));
console.log(JSON.stringify(GetOtherProductWithoutDivision([4])));