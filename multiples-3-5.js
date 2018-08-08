function FindMultiples() {

    var sum = 0;
    var found = [];

    for (let i = 3; i < 1000; i = i + 3) {
        sum += found[i] ? 0 : i;
        found[i] = true;
    }

    for (let j = 5; j < 1000; j = j + 5) {
        sum += found[j] ? 0 : j;
        found[j] = true;
    }

    return sum;

}


console.log(FindMultiples());



// belowThis [int] number that natural values must be below
// multiplesOf [array<int>] array of natural numbers to look for multiples of
// returns the sum of all multiples of numbers in the array that are strictly less
// than the belowThan value.
function FindUniqueMultipleSum(belowThis, multiplesOf) {

    let sum = 0;
    let found = [];

    for (let n of multiplesOf) {
        for (let i = n; i < belowThis; i += n) {
            sum += found[i] ? 0 : i;
            found[i] = true;
        }
    }
    return sum;
}

console.log(FindUniqueMultipleSum(1000, [3, 5]));