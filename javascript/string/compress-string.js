// Compress and return the given string using the counts of repeated (case-sensitive) characters.

function compressString(s) {
	let compressed = "";
	let count = 1;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === s[i + 1]) {
			count++;
		} else {
			compressed += s[i] + count;
			count = 1;
		}
	}
	return compressed.length < s.length ? compressed : s;
}
// Time: O(n), Space: O(n)
