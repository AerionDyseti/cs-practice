
// Convert a given number into a string.
// Asked by Google in Phone Interview #1

function numToString(num) {

    let outputString = "";

    // check if number is pos or neg;
    let neg = (num < 0);

    if (num == 0) return "0";
    if (neg) num *= -1;

    while (num !== 0) {
        let currentDigit = (num % 10).toString();
        outputString = currentDigit + outputString;
        num = Math.floor(num / 10);
    }

    if (neg) outputString = "-" + outputString;

    return outputString;

}
