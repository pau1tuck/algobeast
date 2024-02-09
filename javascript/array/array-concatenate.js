/**
 * Time O(N) | Space O(2N) = O(N)
 * https://leetcode.com/problems/concatenation-of-array/
 * @param {number[]} arr
 * @return {number[]}
 */

const concatenateArray = arr => {
    return [...arr, ...arr];
};
