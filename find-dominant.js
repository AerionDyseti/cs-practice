/**
 * @param {number[]} nums input array of numbers in the length of 1-50, each of which will be from 0 to 99.
 * @return {number} the index of the dominant number if it exists, or -1.
 * 
 * In a given integer array nums, there is always exactly one largest element.
 * Find whether the largest element in the array is at least twice as much as every other number in the array.
 * If it is, return the index of the largest element, otherwise return -1.
 * 
 */
var dominantIndex = function (nums) {
    if (nums.length == 1) return 0;

    let first = Math.max(nums[0], nums[1]);
    let second = Math.min(nums[0], nums[1]);
    let firstIndex = nums[0] > nums[1] ? 0 : 1;

    for (let i = 2; i < nums.length; i++) {

        if (nums[i] > first) {
            second = first;
            first = nums[i];
            firstIndex = i;
        }

        else if (nums[i] > second) {
            second = nums[i];
        }

    }

    return (first >= second * 2) ? firstIndex : -1;
};