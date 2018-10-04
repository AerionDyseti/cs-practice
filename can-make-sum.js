/**
    Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
    For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
    Bonus: Can you do this in one pass?
 */

/** 
 * @param {number} desiredSum
 * @param {Array<number>} givenArray
 * @returns
 */
function CanMakeSum(k, nArray)
{
    let needed = new Set();
    for (let n of nArray)
    {
        if (needed.has(n)) { return true; }
        else { needed.add(k - n); } // Store compliment for future searches.
    }
    return false;
}


console.log(CanMakeSum(15, [15, 0]));
