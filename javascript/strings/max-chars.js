function maxChars(str) {
    let charMap = {};
    let max = 0;
    let maxChar = "";

    // Populate the frequency map
    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    // Find the character with the highest count
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}
