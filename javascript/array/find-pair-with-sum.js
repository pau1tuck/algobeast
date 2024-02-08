//? LINEAR SEARCH
/* Basic and straightforward search technique. Useful for iterating through sorted arrays or linked lists when you want to compare elements or find a pair that meets a specific criterion.

Problem: Pair with Target Sum

Description: Given a sorted array of integers and a target sum, find a pair in the array whose sum is equal to the given target. Return the two indices in a new array if they exist; otherwise, return an empty array.

Rationale: The two pointers technique is perfect for this problem. You can start with one pointer at the beginning and another at the end of the array, and move them towards each other based on the sum of their corresponding values compared to the target sum. */

function findPairWithTargetSum(arr, target) {
	// Handle edge cases: empty array or invalid target
	if (!arr || arr.length < 2) return [];

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
