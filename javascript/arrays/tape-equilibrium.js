/* Instructions: A non-empty array `arr` consisting of N integers is given. arrrray `arr` represents numbers on a tape.
Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: arr[0], arr[1], ..., arr[P − 1] and arr[P], arr[P + 1], ..., arr[N − 1].
The difference between the two parts is the value of: |(arr[0] + arr[1] + ... + arr[P − 1]) − (arr[P] + arr[P + 1] + ... + arr[N − 1])|
In other words, it is the absolute difference between the sum of the first part and the sum of the second part. */

function tapeEquilibrium(arr) {
    let totalSum = arr.reduce((acc, val) => acc + val, 0);
    let leftSum = 0;
    let minDiff = Infinity;

    for (let P = 1; P < A.length; P++) {
        leftSum += arr[P - 1];
        const rightSum = totalSum - leftSum;
        const diff = Math.abs(leftSum - rightSum);

        if (diff < minDiff) {
            minDiff = diff;
        }
    }
    return minDiff;
} // Time: O(n), where n is the number of elements in array A; Space: O(1)
