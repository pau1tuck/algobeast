/* Instructions: Write a function to search for a specific element in a given array using linear search. The function should return the index of the element if found; otherwise, return -1.
Input: An array of integers, arr, and an integer, target, to search for in the array.
Output: An integer representing the index of target in arr if it is found; otherwise, return -1. */

function linearSearch(arr, target) {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is the target
        if (arr[i] === target) {
            return i; // Return the index if found
        }
    }
    return -1; // Return -1 if the target is not found
}
// Time: O(n), as we may need to check each element in the worst case
// Space: O(1), as we are using a constant amount of space
