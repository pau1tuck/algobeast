/* Instructions: Write a function to find the length of the longest consecutive sequence of elements in an array of integers.
The elements are not required to be in order within the array.
Input: An array of integers, arr.
Output: An integer representing the length of the longest sequence of consecutive numbers in the array. */

function longestConsecutiveSet(arr) {
    if (arr.length === 0) {
        return 0;
    }
    const set = new Set(arr);
    let longestStreak = 0;
    for (const num of set) {
        // Only start counting if 'num' is the start of a sequence
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            // Increment the streak while consecutive numbers are found
            while (set.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
} // Time: O(1), Space: O(n)

function longestConsecutiveMap(arr) {
    const numCount = new Map();
    let longestStreak = 0;
    // Initialize the map with all numbers
    for (const num of arr) {
        numCount.set(num, true);
    }
    for (const num of arr) {
        // Check if it's the start of a new sequence
        if (!numCount.has(num - 1)) {
            let currentStreak = 1;
            let currentNum = num;
            // Continue the sequence
            while (numCount.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            // Update the longest streak found
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
}
