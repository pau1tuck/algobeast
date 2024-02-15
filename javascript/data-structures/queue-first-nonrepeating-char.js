// QUEUE FIFO: Write a JavaScript function called firstNonRepeatingCharacter that takes a string and returns the first non-repeating character in the string. If there is no non-repeating character, return '_'. Consider the string as a stream of characters, where you need to find the first unique character at each point.

function firstNonRepeatingCharacterQueue(stream) {
    let charCountMap = {};
    let queue = [];

    for (let char of stream) {
        // Update the character count
        if (!charCountMap[char]) {
            charCountMap[char] = 1;
        } else {
            charCountMap[char]++;
        }

        // Add new characters to the queue
        if (charCountMap[char] === 1) {
            queue.push(char);
        }

        // Remove non-unique characters from the front of the queue
        while (queue.length && charCountMap[queue[0]] > 1) {
            queue.shift();
        }
    }

    // Check the first non-repeating character
    if (queue.length) {
        return queue[0]; // Returns the first non-repeating character
    } else {
        return '_'; // Returns '_' if no non-repeating character is found
    }
}

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

    return '_'; // Return '_' if there's no non-repeating character
}