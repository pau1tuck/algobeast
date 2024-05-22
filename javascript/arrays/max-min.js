/* You will be given a list of integers, arr, and a single integer `k`.
You must create an array of length k from elements of arr such that its unfairness is minimized.
Call that array arr'. Unfairness of an array is calculated as max (arr' min(arr')
Where: max denotes the largest integer in arr'.
min denotes the smallest integer in arr'.

Example
    arr = 1,4, 7, 2
    k = 2
    Pick any two elements, say arr' = [4, 7].
    unfairness = max(4, 7) min(4, 7) = 7 4 = 3
    Testing for all pairs, the solution [1, 2] provides the minimum unfairness.
    Note: Integers in arr may not be unique.

maxMin has the following parameter(s):
    int k: the number of elements to select
    int arr[n]:: an array of integers
Returns: int: the minimum possible unfairness */

function maxMin(k, arr) {
    // Sort the array in non-decreasing order
    arr.sort((a, b) => a - b);
    // Initialize the minimum unfairness to a large number
    let minimumUnfairness = Infinity;
    // Loop through the array and find the minimum unfairness possible
    for (let i = 0; i <= arr.length - k; i++) {
        // Calculate the unfairness of the current window of length k
        let currentUnfairness = arr[i + k - 1] - arr[i];
        // Update the minimum unfairness if the current one is smaller
        if (currentUnfairness < minimumUnfairness) {
            minimumUnfairness = currentUnfairness;
        }
    }
    return minimumUnfairness;
}
// Example usage:
const arr = [1, 4, 7, 2];
const k = 2;
console.log(maxMin(k, arr)); // Outputs: 1 (the minimum unfairness is achieved with subarray [1, 2])
