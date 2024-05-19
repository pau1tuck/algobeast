/* Instructions: Write a function to find the maximum product of any subset of elements in a given array of integers. Consider only positive numbers for the product calculation.
Input: An array of integers, arr.
Output: An integer representing the maximum product of a subset of positive elements in the array. If no positive number exists, return 1 (assuming an empty subset product). */

// Positive integers only:
const maxPositiveProductPair = arr => {
    let highestInt = 0; // Initialize holding variables
    let nextHighestInt = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highestInt) {
            nextHighestInt = highestInt;
            highestInt = arr[i];
        } else if (arr[i] > nextHighestInt) {
            nextHighestInt = arr[i];
        }
    }
    return highestInt * nextHighestInt;
};

// -----------------------------------------------

// The best solution is to use a greedy approach where we track the highest and next-highest integers at each point in the array.
// This has a time complexity of O(n) since we only walk through the array once. */

const maxProductPair = arr => {
    let highestInt = -Infinity; // Initialize temp variables
    let nextHighestInt = -Infinity;
    let lowestInt = Infinity;
    let nextLowestInt = Infinity;

    for (let i = 0; i < arr.length; i++) {
        // Handling highest numbers
        if (arr[i] > highestInt) {
            nextHighestInt = highestInt; // Set nextHighestInt to Infinity
            highestInt = arr[i]; // Set highestInt to current
        } else if (arr[i] > nextHighestInt) {
            nextHighestInt = arr[i];
        }

        if (arr[i] < lowestInt) {
            // Handling lowest (negative) numbers
            nextLowestInt = lowestInt; // Set nextLowestInt to Infinity
            lowestInt = arr[i]; // Set lowestInt to current
        } else if (arr[i] < nextLowestInt) {
            nextLowestInt = arr[i];
        }
    }

    // Compare product of 2 largest numbers with product of 2 smallest numbers.
    return Math.max(highestInt * nextHighestInt, lowestInt * nextLowestInt);
};
