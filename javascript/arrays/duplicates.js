/**
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} arr
 * @return {boolean}
 */

const hasDuplicates = arr => {
    // Remove duplicates:
    const numsSet = new Set(arr);

    // If the size of the Set is the same as arr length, no duplicates existed.
    const sizesAreEqual = numsSet.size === arr.length;

    // If sizes are not equal, it means there were duplicates in the array.
    return !sizesAreEqual;
};

const removeDuplicates = arr => {
    // Remove duplicates by converting the array to a Set, then back to an array:
    const uniqueArray = Array.from(new Set(arr));

    return uniqueArray;
}

const findDuplicates = (arr) => {}