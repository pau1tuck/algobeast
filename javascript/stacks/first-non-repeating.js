// HashMap FIFO: Write a JavaScript function called firstNonRepeatingCharacter that takes a string and returns the first non-repeating character in the string. If there is no non-repeating character, return '_'. Consider the string as a stream of characters, where you need to find the first unique character at each point.

function firstNonRepeatingCharacterHashmap(s) {
    let counts = {}; // To store the count of each character
    let order = []; // To keep track of the order of characters

    // Iterate through the string to populate counts and order
    for (let char of s) {
        if (!counts[char]) {
            counts[char] = 1;
            order.push(char); // Add character to order list if it's the first occurrence
        } else {
            counts[char]++; // Increment the count if the character is repeating
        }
    }

    // Find the first non-repeating character by checking the order list
    for (let char of order) {
        if (counts[char] === 1) {
            return char; // Return the first non-repeating character
        }
    }

    return "_"; // Return '_' if there's no non-repeating character
}
