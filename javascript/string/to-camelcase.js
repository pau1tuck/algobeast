// Convert the given string to camelcase.

function toCamelCase(phrase) {
	const words = phrase.split(" ");

	words[0] = words[0].toLowerCase();

	// Capitalize the first letter of each remaining word
	for (let i = 1; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].slice(1);
	}

	// Join the words to form the camel case string
	const camelCaseString = words.join("");

	return camelCaseString;
}
// Time: O(n), Space: O(n)
