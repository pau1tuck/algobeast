function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;

        // Check the rest of the array to see if anything is smaller:
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

        // If the minimum isn't in the position, swap it:
        if (i !== min) {
            const swap = array[i];
            array[i] = array[min];
            array[min] = swap;
        }
    }
    return array;
}
// Time Complexity = O(n²);  Space Complexity = O(1)