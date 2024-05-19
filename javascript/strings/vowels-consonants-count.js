// Return the number of vowels and consonants in the given string.

function countVowelsAndConsonants(s) {
	const vowels = new Set(["a", "e", "i", "o", "u"]);
	let vowelCount = 0;
	let consonantCount = 0;

	for (const char of s.toLowerCase()) {
		if (vowels.has(char)) {
			vowelCount++;
		} else if (/[a-z]/.test(char)) {
			consonantCount++;
		}
	}

	return { vowelCount, consonantCount };
}
