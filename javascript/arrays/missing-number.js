/* Given an array `arr` containing n-1 unique integers in the range from 1 to n,
write a function to find the one number that is missing from the array. */

function findMissingNumber(arr) {
    const n = arr.length + 1; // Expected length of the sequence (including the missing number)
    // Calculate the expected sum of all integers from 1 to n
    const expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;
    for (const num of arr) {
        actualSum += num; // Calculate the actual sum of the given array
    }
    // Calculate the missing number by subtracting the actual sum from the expected sum
    const missingNumber = expectedSum - actualSum;

    return missingNumber;
}
