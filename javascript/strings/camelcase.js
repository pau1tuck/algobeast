// Convert the given string to camelcase.

function toCamelCase(phrase) {
    const words = phrase.split(" ");

    words[0] = words[0].toLowerCase();

    // Capitalize the first letter of each remaining word
    for (let i = 1; i < words.length; i++) {
		// Method: slice(1) is called on a string to create a substring that includes every character except for the first.
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    const camelCaseString = words.join("");

    return camelCaseString;
}
// Time: O(n), Space: O(n)
