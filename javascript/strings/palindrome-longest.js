// Find the longest palindrome within a given string.

function longestPalindrome(s) {
	if (s.length < 1 || s === null) return "";
	let longest = "";

	for (let i = 0; i < s.length; i++) {
		// Check for odd length palindromes
		const oddPalindrome = expandAroundCenter(s, i, i);
		if (oddPalindrome.length > longest.length) {
			longest = oddPalindrome;
		}
		// Check for even length palindromes
		const evenPalindrome = expandAroundCenter(s, i, i + 1);
		if (evenPalindrome.length > longest.length) {
			longest = evenPalindrome;
		}
	}
	return longest;
}
function expandAroundCenter(s, left, right) {
	while (left >= 0 && right < s.length && s[left] === s[right]) {
		left--;
		right++;
	}
	// Return the longest palindrome found from this center
	return s.slice(left + 1, right);
}
