/* Binary Search works by repeatedly dividing the search range in half. It's an efficient way to find a target element in a sorted array, with a time complexity of O(log n), where n is the length of the array.*/

function binarySearch(arr, target) {
    let left = 0; // Left pointer
    let right = arr.length - 1; // Right pointer

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Calculate mid index

        if (arr[mid] === target) {
            return mid; // Target found, return index
        } else if (arr[mid] < target) {
            left = mid + 1; // Adjust left pointer
        } else {
            right = mid - 1; // Adjust right pointer
        }
    }

    return -1; // Target not found
}

// Example sorted array
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];

// Example search target
const target = 7;

// Perform binary search
const index = binarySearch(sortedArray, target);

// Output the result
if (index !== -1) {
    console.log(`Target ${target} found at index ${index}.`);
} else {
    console.log(`Target ${target} not found in the array.`);
}
