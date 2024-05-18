// Problem: Two Sum / Pair with Target Sum

// Description: Given a (sorted array) of integers and a target sum, find a pair in the array whose sum is equal to the given target. Return the two indices in a new array if they exist; otherwise, return an empty array.

/* Rationale: The two pointers technique is perfect for this problem. You can start with one pointer at the beginning and another at the end of the array, and move them towards each other based on the sum of their corresponding values compared to the target sum.

Basic and straightforward search technique. Useful for iterating through sorted arrays or linked lists when you want to compare elements or find a pair that meets a specific criterion. */

function findPairWithTargetSum(arr, target) {
    // Handle edge cases: empty array or invalid target
    if (!arr || arr.length < 2) return [];

    // arr.sort((a, b) => a - b); sort??
    // Initialize pointers
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Iterate using both pointers
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return [left, right];
        }
        if (sum < target) {
            left++; // Move left pointer to the right
        } else {
            right--; // Move right pointer to the left
        }
    }
    return [];
}

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
