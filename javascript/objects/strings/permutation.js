// Given two strings, check whether one string is an exact permutation of the other.

/* A permutation means that the strings have the same characters, but they can be in different orders.
Assume the comparison is case sensitive and whitespace is significant. */

function checkPermutation(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	const charCount = {};

	for (const char of str1) {
		charCount[char] = (charCount[char] || 0) + 1;
	} // 'd' = 0 + 1

	for (const char of str2) {
		if (!charCount[char]) {
			return false;
		}
		charCount[char]--; // = Match found, remove 1 char
	}
	return true;
}
// Time: O(n), Space: O(n)