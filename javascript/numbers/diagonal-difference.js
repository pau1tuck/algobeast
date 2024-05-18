function diagonalDifference1(arr) {
    let diagonalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        diagonalSum += arr[i][i] - arr[i][arr.length - 1 - i];
    }
    return Math.abs(diagonalSum);
}

function diagonalDifference2(arr) {
    let len = arr.length; // Init.
    let diag1 = 0;
    let diag2 = 0;

    for (let i = 0; i < len; i++) {
        diag1 += arr[i][i]; // [0/0] [1/1] [2/2] [3/3]
        diag2 += arr[i][len - i - 1]; // [0/3] [1/2] [2/1] [3/0]
    }
    return Math.abs(diag1 - diag2);
}
