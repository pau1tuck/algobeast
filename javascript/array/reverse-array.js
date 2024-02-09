// Return the given array backwards. Do not use pop, push, shift, or unshift.

function reverseArray(arr) {
	let start = 0;
	let end = arr.length - 1;

	while (start < end) {
		// Swap elements at 'start' and 'end'
		[arr[start], arr[end]] = [arr[end], arr[start]];
		start++;
		end--;
	}
}
// Time: O(n), Space: O(1)
