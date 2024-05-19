/* KTH ORDER STATISTICS
This problem is often referred to as the "Kth Order Statistics" in computer science.
A common method to solve it is the "Quickselect" algorithm, which is a selection algorithm to find the kth smallest (or largest) element in an unordered list.
The problem requires finding an element in the array that would be at position 'k' if the array were sorted, without actually sorting the entire array. */

function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left;

    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
}
function quickselect(arr, left, right, k) {
    if (left === right) {
        return arr[left];
    }
    let pivotIndex = partition(arr, left, right);

    if (k === pivotIndex) {
        return arr[k];
    } else if (k < pivotIndex) {
        return quickselect(arr, left, pivotIndex - 1, k);
    } else {
        return quickselect(arr, pivotIndex + 1, right, k);
    }
}
function findKthOrderStatistic(arr, k) {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }
    return quickselect(arr, 0, arr.length - 1, k - 1);
}
// Example:
let arr = [3, 2, 1, 5, 4];
let k = 2;
console.log(`The ${k}th smallest element is: ${findKthOrderStatistic(arr, k)}`);
