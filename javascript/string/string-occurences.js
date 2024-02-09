// Count occurrences of characters in a string
function countOccurrences(str) {
    const occurrences = {}; // Initialize an empty object to store occurrences

    for (const char of str) {
        if (occurrences[char]) {
            occurrences[char]++; // Increment the count if the character is already encountered
        } else {
            occurrences[char] = 1; // Initialize the count if encountering the character for the first time
        }
    }

    return occurrences;
}

// Example input
const inputString = "hello";

// Count occurrences of characters in the input string
const charOccurrences = countOccurrences(inputString);

// Output the occurrences
console.log("Character occurrences:", charOccurrences);
