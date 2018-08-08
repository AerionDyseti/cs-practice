
/**
 * Staircase with N steps, and you can climb 1 or 2 steps at a time.
 * Given N, write a function that returns the number of unique ways you can climb the staircase.
 * 
 * 
 */


const stepsAllowedForThisProblem = [1, 2, 3, 5];

/**
 * @param {*} steps Number of steps in the staircase
 * @param {*} stepsAllowedArray An array of integers for the number of steps allowed to take.
 * @param {*} solved (optional) 2-D array representing solved values for steps-stepsAllowed.
 * @returns The number of ways you canj 
 */
function HowManyWays(steps, stepsAllowedArray, solved) {
    if (steps == 0) { return 1 }

    solved = solved || [[]];
    let total = 0;

    for (let stepsAllowed of stepsAllowedArray) {
        if (solved[steps] && solved[steps][stepsAllowed]) {
            total = solved[steps][stepsAllowed];
            break;
        }
        if (steps >= stepsAllowed) {
            total += HowManyWays(steps - stepsAllowed, stepsAllowedArray, solved);
        }
        if (!solved[steps]) {
            solved[steps] = [];
        }
        solved[steps][stepsAllowed] = total;
    };
    return total;
}




const threeAnswer = HowManyWays(3, stepsAllowedForThisProblem);
console.log("threeAnswer: " + threeAnswer);

const fourAnswer = HowManyWays(4, stepsAllowedForThisProblem);
console.log("fourAnswer: " + fourAnswer);

const fiveAnswer = HowManyWays(5, stepsAllowedForThisProblem);
console.log("fiveAnswer: " + fiveAnswer);

const twentythreeAnswer = HowManyWays(23, stepsAllowedForThisProblem);
console.log("twentythreeAnswer: " + twentythreeAnswer);

const fiftySixAnswer = HowManyWays(56, stepsAllowedForThisProblem);
console.log("fiftySixAnswer: " + fiftySixAnswer);

const ninetySevenAnswer = HowManyWays(97, stepsAllowedForThisProblem);
console.log("ninetySevenAnswer: " + ninetySevenAnswer);