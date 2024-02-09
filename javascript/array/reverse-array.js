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
