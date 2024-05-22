/* Merge Sort is a popular sorting algorithm that follows the divide-and-conquer approach.
It divides the input array into smaller subarrays, sorts them recursively,
and then merges them back together to produce a sorted array. */

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the two subarrays while maintaining the sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    // Concatenate any remaining elements from both subarrays
    return result.concat(
        left.slice(leftIndex),
        right.slice(rightIndex),
    );
}
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: already sorted or empty array
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort and merge the subarrays
    return merge(mergeSort(left), mergeSort(right));
}
/* ----------------------------- */
// Example unsorted array
const unsortedArray = [4, 2, 7, 1, 9, 3, 6];

// Apply merge sort
const sortedArray = mergeSort(unsortedArray);

// Output the result
console.log("Sorted array:", sortedArray);
