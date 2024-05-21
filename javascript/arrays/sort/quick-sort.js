function partition(arr, left, right) {
    const pivot = arr[right]; // using the last element as the pivot
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j); // swap elements if current element is less than the pivot
        }
    }
    swap(arr, i + 1, right); // place the pivot element in the middle
    return i + 1; // return pivot index
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]; // ES6 destructuring assignment for swapping
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right); // getting the pivot index
        quickSort(arr, left, pivotIndex - 1);  // sorting the left subarray
        quickSort(arr, pivotIndex + 1, right); // sorting the right subarray
    }
    return arr;
}
// Example usage:
const array = [8, 4, 23, 42, 16, 15];
console.log('Sorted Array:', quickSort(array));

/* Time Complexity: Best and Average Case: O(n log n) - This is when the pivot splits the array into two nearly equal halves, leading to a logarithmic number of recursive calls.
Worst Case: O(n^2) - This occurs when the pivot is the smallest or largest element at each step, degrading to quadratic time as each recursive call processes one less element than the previous call.

Space Complexity: O(log n) - This space is used on the call stack for recursion. In the best and average case, due to the logarithmic stack depth (as each call splits the array roughly in half).
However, this can degrade to O(n) in the worst case, where the recursion depth approaches the number of elements in the array. */