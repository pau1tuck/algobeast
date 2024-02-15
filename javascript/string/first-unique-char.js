// Find the first character in a string that does not repeat anywhere else in the string.

function firstUniqueChar(s) {
    let charCount = {}; // Object to store character counts

    // Count the occurrences of each character
    for (let char of s) {
        if (charCount[char] === undefined) {
            charCount[char] = 1;
        } else {
            charCount[char]++;
        }
    }

    // Find the first unique character
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return s[i]; // Return the first unique character
        }
    }

    return '_'; // If no unique character is found, return '_'
}
