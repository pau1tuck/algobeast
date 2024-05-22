/* A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

`A[0] = 9  A[1] = 3  A[2] = 9 A[3] = 3  A[4] = 9  A[5] = 7 A[6] = 9`

The element at index 5 has value 7 and is unpaired.

Write a function: `function solution(A);` that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element. */

function findUnpairedInteger(arr) {
    let result = 0;
    for (const num of arr) {
        result ^= num; // XOR operation
    }
    return result;
}
/* -------------------------------------------- */
// Example array
const inputArray = [9, 3, 9, 3, 7, 5, 7];

// Find the unpaired integer
const unpairedInteger = findUnpairedInteger(inputArray);

// Output the result
console.log("Unpaired integer:", unpairedInteger);
