function maxSubarraySum(arr) {
    let maxEndingHere = arr[0]; // Initialize with the first element
    let maxSoFar = arr[0]; // Initialize with the first element

    for (let i = 1; i < arr.length; i++) {
        // Compare the current element with the sum ending at the previous index
        // Update maxEndingHere to either the current element or the sum ending at the previous index + current element
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);

        // Update maxSoFar to the maximum of maxSoFar and maxEndingHere
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar; // Return the maximum subarray sum
}

// Example input
const inputArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// Calculate the maximum subarray sum
const maxSum = maxSubarraySum(inputArray);

// Output the result
console.log("Maximum subarray sum:", maxSum);
