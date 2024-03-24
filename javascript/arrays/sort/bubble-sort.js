function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j <= i; j++) {
			if (array[i] < array[j]) {
				const swap = array[i];
				array[i] = array[j];
				array[j] = swap;
			}
		}
	}
	return array;
}
// Time Complexity = O(n²);  Space Complexity = O(1)
