function isPalindrome(str) { // Use optimized version in palindrome.js
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

// Check if a given string is a palindrome
function isPalindromeSubString(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const len = cleanedStr.length;

    // Compare characters from both ends towards the middle
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
/*** ------------------------------------------------------ ***/
// Find the longest palindrome substring in a sentence
function findLongestPalindromeSubstring(sentence) {
    const letters = sentence.toLowerCase().split("");
    let longestPalindrome = "";

    // Generate all possible substrings and check for palindromes
    for (let i = 0; i < letters.length; i++) {
        for (let j = i + 1; j <= letters.length; j++) {
            const substring = letters.slice(i, j).join("");
            if (
                isPalindrome(substring) &&
                substring.length > longestPalindrome.length
            ) {
                longestPalindrome = substring;
            }
        }
    }

    return longestPalindrome;
}
// Example input
const inputSentence = "A man, a plan, a canal, Panama!";
const longestPalindrome =
    findLongestPalindromeSubstring(inputSentence);

// Output the result
console.log("Longest palindrome substring:", longestPalindrome);
