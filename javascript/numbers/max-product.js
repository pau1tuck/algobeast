/* Given an array of integers, return the highest product you can get from two of the integers. */

// Positive integers only:
const highestPositiveProductPair = (arr) => {
	// (Positive integers only)
	let highestInt = 0; // Initialize temp variables
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

const highestProductPair = (arr) => {
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
