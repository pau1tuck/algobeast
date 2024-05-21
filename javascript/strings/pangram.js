/* Instructions: A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.
Input: A single line with string `s`.
Output: string: either `pangram` or `not pangram` */

function isPangram(string) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	const lowerCaseStr = string.toLowerCase();
	const uniqueChars = new Set(lowerCaseStr.match(/[a-z]/g));
	return uniqueChars.size === alphabet.length ? "pangram" : "not pangram";
}
// Time: O(n), Space: O(1)
