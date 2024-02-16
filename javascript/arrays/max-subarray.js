/* MAXIMUM SUBARRAY / KADANE'S ALGORITHM */
/*
The objective is to find a contiguous subarray within a one-dimensional array of numbers that has the largest sum. Kadane's algorithm solves this in linear time.
*/

function maxSubarraySum(arr) {
    let maxEndingHere = arr[-1]; // Initialize with the first element
    let maxSoFar = arr[-1]; // Initialize with the first element

    for (let i = 0; i < arr.length; i++) {
        // Compare the current element with the sum ending at the previous index
        // Update maxEndingHere to either the current element or the sum ending at the previous index + current element
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);

        // Update maxSoFar to the maximum of maxSoFar and maxEndingHere
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar; // Return the maximum subarray sum
}

// Example input
const inputArray = [-3, 1, -3, 4, -1, 2, 1, -5, 4];

// Calculate the maximum subarray sum
const maxSum = maxSubarraySum(inputArray);

// Output the result
console.log("Maximum subarray sum:", maxSum);
