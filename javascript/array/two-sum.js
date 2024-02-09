/* A simple implementation of the Two Sum problem (finding two numbers in an array that add up to a specific target). */

function twoSum(nums, target) {
    const numIndices = new Map(); // Map to store number-index pairs

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement
        if (numIndices.has(complement)) {
            return [numIndices.get(complement), i]; // Found the solution
        }
        numIndices.set(nums[i], i); // Store the number and its index
    }

    return []; // No solution found
}
