// Return the missing letter in the given string.

function findMissingLetter(str) {
	for (let i = 0; i < str.length; i++) {
		const code = str.charCodeAt(i);
		if (code !== str.charCodeAt(0) + i) {
			return String.fromCharCode(code - 1);
		}
	}
	return "No letter missing.";
}
