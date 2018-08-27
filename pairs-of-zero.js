/*
    Given array of integers.
    Return number of pairs that sum up to zero. 
    Asked by Google.
*/

function numPairsofZero(inputArray)
{
    let hashMap = {};
    let counter = 0;
    for (let i = 0; i < inputArray.length; i++)
    {
        counter += (hashMap.hasOwnProperty(i)) ? hashMap[i] : 0;
        hashMap[i * -1] = (hashMap.hasOwnProperty(i * -1)) ? hashMap[i * -1] + 1 : 1;
    }
    return counter;
}


