/* An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
Your goal is to find that missing element.
Write a function:
    `function solution(A);`
that, given an array A, returns the value of the missing element. */

function permMissingElement(A) {
    const N = A.length + 1;
    const totalSum = (N * (N + 1)) / 2;
    let arraySum = 0;

    for (let i = 0; i < A.length; i++) {
        arraySum += A[i];
    }
    return totalSum - arraySum;
} // Time: O(n), where n is the number of elements in array A; Space: O(1)