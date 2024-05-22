/* Instructions: An array `arr` consisting of N different integers is given.
The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
Your goal is to find that missing element.
Write a function: `function permMissingElement(arr);`
that, given an array `arr`, returns the value of the missing element. */

function permMissingElement(arr) {
    const N = arr.length + 1;
    const totalSum = (N * (N + 1)) / 2; // `totalSum` calculates the sum of numbers from 1 to 𝑁 (where 𝑁 is length of `arr + 1`).
    let arraySum = 0;

    for (let i = 0; i < arr.length; i++) {
        arraySum += arr[i];
    }
    return totalSum - arraySum;
} // Time: O(n), where n is the number of elements in array A; Space: O(1)
/*
- `totalSum` calculates the sum of numbers from 1 to 𝑁 (where 𝑁 is length of `arr + 1`).
- `arraySum` is the sum of all elements actually present in the array.
- The missing element is the difference between the `totalSum` and the `arraySum` because all other elements cancel each other out.
*/