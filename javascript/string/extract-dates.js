// Return an array containing all of the dates within the given string.

function extractDates(text) {
	const datePattern = /\b\d{2}[-\/ ]\d{2}[-\/ ]\d{4}\b/g;

	const matches = text.match(datePattern);

	return matches || [];
}
/* The forward slashes /.../ are the delimiters that mark the beginning and end of the regex pattern in JavaScript.

\b - This is a word boundary assertion. It ensures that the pattern matches only at the beginning or end of a word. This helps to isolate our date pattern from surrounding text, preventing partial matches within longer strings of digits.

\d{2} - This part matches exactly two digits.

[-\/ ] - This is a character class that matches a single character that is either a hyphen -, a forward slash \/, or a space.

\d{4} - This matches exactly four digits, representing the year in the date.

\b - Another word boundary assertion, ensuring that the pattern matches only if it appears at the end of a word, helping to isolate the date pattern.

/g - This is a flag that stands for "global" search, meaning the regex engine will try to find all matches throughout the entire string, rather than stopping at the first match. */
