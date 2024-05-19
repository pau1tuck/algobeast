/* Instructions: Write a function to find the first non-repeating number in a given array of integers.
Input: An array of integers, arr.
Output: An integer representing the first non-repeating number in the array. Return -1 if there is no such number. */

function firstNonRepeating(arr) {
    const countMap = new Map();
    // Count occurrences of each number
    for (const num of arr) {
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1);
        } else {
            countMap.set(num, 1);
        }
    }
    // Find the first non-repeating number
    for (const num of arr) {
        if (countMap.get(num) === 1) {
            return num;
        }
    }
    return -1; // Return -1 if there's no non-repeating number
}
