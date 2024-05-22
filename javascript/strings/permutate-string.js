/**
 * Instructions:
 * 1. Take a string `s` as input.
 * 2. If the string length is 1, return an array containing just the string itself.
 * 3. Recursively generate permutations for all characters except the current one,
 *    and concatenate the current character to each of these permutations.
 * 4. Use a set to handle any duplicate permutations that may arise from characters
 *    that appear more than once in the input string.
 * 5. Return an array of all unique permutations.
 * Input: A single string, s.
 * Output: Array of strings - all unique permutations of s.
 * @param {string} s - The string to generate permutations for.
 * @return {string[]} - An array containing all permutations of the input string.
 */

function generatePermutations(s) {
    const results = [];
    // Base case: if the string is a single character, return an array with that character.
    if (s.length === 1) {
        return [s];
    }
    const permSet = new Set(); // To avoid duplicates if `s` has repeated characters
    // Generate permutations recursively
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const remainingChars = s.slice(0, i) + s.slice(i + 1, s.length);

        // Generate all permutations for the remaining characters
        for (let perm of generatePermutations(remainingChars)) {
            permSet.add(char + perm); // Prepend the current character to each permutation
        }
    }
    // Convert set back to array to gather all unique permutations.
    results.push(...permSet);
    return results;
}
// Example usage:
console.log(generatePermutations("abc")); // Outputs: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
/**
 * Time Complexity: O(n * n!), where n is the length of the string.
 * This accounts for generating n! permutations and concatenating strings of length n.
 * Space Complexity: O(n!), due to storing n! permutations in the results array.
 * Additionally, the recursive call stack will have a depth of n.
 */
