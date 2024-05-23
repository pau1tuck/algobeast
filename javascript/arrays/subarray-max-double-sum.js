// Instructions: Find the maximal sum of any double slice in a given array.
// Input: A non-empty array A of integers.
// Output: The maximal sum of any double slice (X, Y, Z) in the array A.

function maxDoubleSliceSum(A) {
    const N = A.length;
    if (N < 4) return 0;
    // Arrays to store the max sum of subarrays ending before and starting after each position
    const maxEndingHere = Array(N).fill(0);
    const maxStartingHere = Array(N).fill(0);
    // Compute max sum subarrays ending before each position
    for (let i = 1; i < N - 1; i++) {
        maxEndingHere[i] = Math.max(0, maxEndingHere[i - 1] + A[i]);
    }
    // Compute max sum subarrays starting after each position
    for (let i = N - 2; i > 0; i--) {
        maxStartingHere[i] = Math.max(0, maxStartingHere[i + 1] + A[i]);
    }
    // Calculate the maximum double slice sum
    let maxDoubleSliceSum = 0;
    for (let Y = 1; Y < N - 1; Y++) {
        maxDoubleSliceSum = Math.max(maxDoubleSliceSum, maxEndingHere[Y - 1] + maxStartingHere[Y + 1]);
    }
    return maxDoubleSliceSum;
} // Time: O(N), Space: O(N)
