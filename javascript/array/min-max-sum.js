function minMaxSum(arr) {
    arr.sort((a, b) => a - b);
    let minSum = arr.slice(0, 4).reduce((a, b) => a + b, 0); // Sum of the first 4
    let maxSum = arr.slice(-4).reduce((a, b) => a + b, 0); // slice final 4
    console.log(minSum, maxSum);
}
