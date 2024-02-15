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

/* --------------------------------- */
// Example input
const inputArray = [1, 2, 4, 5, 6];

// Find the missing number
const missingNumber = findMissingNumber(inputArray);

// Output the result
console.log("Missing number:", missingNumber);
