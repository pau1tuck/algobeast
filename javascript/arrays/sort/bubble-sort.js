function bubbleSort(arr) {
	let n = arr.length;
	let swapped;
	do {
		swapped = false;
		for (let i = 1; i < n; i++) {
			if (arr[i - 1] > arr[i]) {
				// Swap the elements
				[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
				swapped = true;
			}
		}
		// Each iteration guarantees the largest element bubbles up to the end of the array
		n--;
	} while (swapped);
}
/*
Time (best case): O(n) - This occurs when the array is already sorted, and the algorithm only needs to pass through the array once to verify.
Time (worst case): O(n^2) e.g. if the array is in reverse, Bubble Sort compares each pair of elements, resulting in quadratic time complexity.
Space: O(1)
*/
