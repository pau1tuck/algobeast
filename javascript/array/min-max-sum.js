// Write a JavaScript function that takes an array of integers and returns the minimum and maximum total sums in the format minSum, maxSum.


function minMaxSum(arr) {
    arr.sort((a, b) => a - b);
    let minSum = arr.slice(0, 4).reduce((a, b) => a + b, 0); // Sum of the first 4
    let maxSum = arr.slice(-4).reduce((a, b) => a + b, 0); // slice final 4
    console.log(minSum, maxSum);
}

function minMaxSumNoSort(arr) {
    let min = arr[0], max = arr[0], totalSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        totalSum += arr[i]; // Sum all elements
        if (arr[i] < min) min = arr[i]; // Find minimum
        if (arr[i] > max) max = arr[i]; // Find maximum
    }
    let minSum = totalSum - max; // Subtract max to get min sum
    let maxSum = totalSum - min; // Subtract min to get max sum
    console.log(minSum, maxSum);
}