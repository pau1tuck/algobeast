// QUEUE FIFO: Write a JavaScript function called firstNonRepeatingCharacter that takes a string and returns the first non-repeating character in the string. If there is no non-repeating character, return '_'. Consider the string as a stream of characters, where you need to find the first unique character at each point.

function firstNonRepeatingCharacter(stream) {
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
