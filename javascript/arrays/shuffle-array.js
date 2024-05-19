/* Instructions: Implement a solution to shuffle a given array. The shuffle must be uniform, meaning every permutation should be equally likely. The solution should have a function to reset the array back to its original configuration as well.
Input: An array of integers, nums.
Output: Return the array shuffled randomly based on the uniform probability. */

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // Swap the current element with the randomly chosen one
    }
    return array;
}
// Time Complexity: O(n) for both shuffle and reset, where n is the length of the array.
// Space Complexity: O(n) due to the storage of the original array.
