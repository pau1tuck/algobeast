function firstNonRepeatingCharacter(s) {
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

    return '_'; // Return '_' if there's no non-repeating character
}