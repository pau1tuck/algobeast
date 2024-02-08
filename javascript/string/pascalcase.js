// Convert the given string to Pascalcase.

const toPascalCase = (sentence) => {
	return sentence
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(" ");
};
// Time: O(n), Space: O(n)
