// Find the length of the longest word in a string.

function findLongestWordLength(s) {
	const words = s.split(" ");
	let longest = 0;

	for (const word of words) {
		if (word.length > longest) {
			longest = word.length;
		}
	}

	return longest;
}
// Time: O(n), Space: O(m) where m = number of words
