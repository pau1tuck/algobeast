//? Regular Expressions

/* Pattern matching in strings is a step up in complexity due to the syntax and concepts involved.

Problem: Extract Dates from Text

Description: Given a block of text, extract all dates, which will be in the formats "DD-MM-YYYY", "DD/MM/YYYY", or "DD MM YYYY", and return them in an array.

Rationale: This problem involves understanding groups, alternation, and more advanced character classes. It highlights regex's ability to recognize and extract patterns from a sea of text, a common requirement in data parsing, log analysis, and processing natural language inputs. It also introduces students to the concept of regex groups, which are used to capture parts of the matched pattern. */

function extractDates(text) {
	// Define the regex pattern to match dates
	const datePattern = /\b\d{2}[-\/ ]\d{2}[-\/ ]\d{4}\b/g;

	// Use the regex to find matches in the text
	const matches = text.match(datePattern);

	// If there are matches, return them; otherwise, return an empty array
	return matches || [];
}
/* The forward slashes /.../ are the delimiters that mark the beginning and end of the regex pattern in JavaScript.

\b - This is a word boundary assertion. It ensures that the pattern matches only at the beginning or end of a word. This helps to isolate our date pattern from surrounding text, preventing partial matches within longer strings of digits.

\d{2} - This part matches exactly two digits. \d is a shorthand character class that matches any digit (equivalent to [0-9]), and {2} is a quantifier that specifies exactly two occurrences of the preceding element (in this case, a digit).

[-\/ ] - This is a character class that matches a single character that is either a hyphen -, a forward slash \/, or a space . The forward slash is escaped with a backslash \/ because forward slashes are used as delimiters for the regex pattern in JavaScript, so escaping tells the regex engine to treat it as a literal character rather than the end of the pattern.

\d{2} - This part, just like the earlier \d{2}, matches exactly two digits, representing another part of the date (either day or month, depending on the format).

[-\/ ] - Again, this character class matches a single character that is either a hyphen, a forward slash, or a space, serving as the separator between the day/month and the year.

\d{4} - This matches exactly four digits, representing the year in the date.

\b - Another word boundary assertion, ensuring that the pattern matches only if it appears at the end of a word, helping to isolate the date pattern.

g - This is a flag that stands for "global" search, meaning the regex engine will try to find all matches throughout the entire string, rather than stopping at the first match. */
