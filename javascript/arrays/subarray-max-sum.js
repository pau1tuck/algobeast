// Find a contiguous subarray within a one-dimensional array of numbers that has the largest sum.

function maxSubarraySumKadane(arr) {
    if (arr.length === 0) return 0; // Edge case

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
// Time: O(n), Space: O(1)


// --------------------------------------------
function maxSubarraySumExplained(arr) {
    // Edge case: If the array is empty, there's no sum to find
    if (arr.length === 0) return 0;

    // Initialize maxEndingHere with the first element.
    // This variable tracks the maximum sum of subarrays ending at the current position.
    let maxEndingHere = arr[0]; // or `let localMax`

    // Initialize maxSoFar with the same first element.
    // This variable keeps track of the overall maximum sum found so far.
    let maxSoFar = arr[0]; // or `let globalMax`

    // Start looping from the second element since we already used the first one to initialize
    for (let i = 1; i < arr.length; i++) {
        // Update maxEndingHere to the maximum of the current element itself or the sum of the current element and maxEndingHere.
        // This step effectively 'extends' the subarray to include the current element, or starts a new subarray from the current element if that leads to a higher sum.
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);

        // Update maxSoFar to the maximum of itself and the new maxEndingHere.
        // This ensures maxSoFar always holds the highest sum we've found so far.
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    // Return the maximum sum found.
    return maxSoFar;
}
/*
Techniques Employed:

Dynamic Programming: The algorithm builds up the solution using previously computed values, which is a hallmark of dynamic programming. By keeping track of the maximum sum of subarrays ending at each index as we iterate through the array, we effectively build up to the final solution.

Local vs Global Maxima: maxEndingHere serves as a local maximum (best solution up to the current point in the array), while maxSoFar serves as the global maximum (best solution found so far in the entire array).

Time Complexity: O(n)
The algorithm goes through the array a single time, performing a constant amount of work for each element, so the time complexity is linear in the size of the input array.

Space Complexity: O(1)
The space used by the algorithm is constant, as it only needs a fixed amount of variables regardless of the input size (maxEndingHere, maxSoFar, and the loop index i).
*/