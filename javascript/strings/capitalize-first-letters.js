/* Instructions: Write a function that capitalizes the first letter of each word in a given string. Each word is separated by a single space.
Input: A string, s.
Output: A string, where the first letter of each word in s is capitalized. */

function capitalizeWordsCharAt(s) {
    return s.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}// Time: O(n), Space: O(n)

// =====================================
function capitalizeWordsRegex(s) {
    return s.replace(/\b\w/g, char => char.toUpperCase());
} // Time: O(n), Space: O(n)