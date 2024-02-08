// Check if a string contains every letter of the alphabet.

function isPangram(string) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	const lowerCaseStr = string.toLowerCase();
	const uniqueChars = new Set(lowerCaseStr.match(/[a-z]/g));

	return uniqueChars.size === alphabet.length;
}
// Time: O(n), Space: O(1)
