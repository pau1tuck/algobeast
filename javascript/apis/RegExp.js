let regex;
regex = /pattern/modifiers; // Literal notation, e.g. /hello/gi
regex = new RegExp("pattern", "modifiers"); // Constructor function, e.g. new RegExp("hello", "gi")

"string".match(regex); // Returns an array of matches
"string".replace(regex, "newSubStr"); // Replaces matches with a new substring
"string".search(regex); // Returns the index of the first match, or -1 if not found
"string".split(regex); // Splits the string at matches
regex.test("string"); // Returns true if the string contains a match

// Common regex patterns
/\d/; // Matches any digit, equivalent to [0-9]
/\D/; // Matches any non-digit character
/\w/; // Matches any alphanumeric character plus underscore, equivalent to [A-Za-z0-9_]
/\W/; // Matches any non-word character
/\s/; // Matches any whitespace character (spaces, tabs, line breaks)
/\S/; // Matches any non-whitespace character
/\t/; // Matches a tab character
/\n/; // Matches a newline character
/\r/; // Matches a carriage return character
[a-zA-Z] // Matches any uppercase or lowercase letter
^ // Matches the beginning of the string, or the beginning of a line if the multiline flag (m) is enabled
$ // Matches the end of the string, or the end of a line if the multiline flag (m) is enabled
. // Matches any character except newline
// * // Matches 0 or more of the preceding token
// + // Matches 1 or more of the preceding token
// ? // Makes the preceding token optional
// (x|y) // Matches either "x" or "y"
// {n} // Matches exactly n occurrences of the preceding token
// {n,} // Matches n or more occurrences of the preceding token
// {n,m} // Matches between n and m occurrences of the preceding token
// Positive lookahead
// (?=pattern) // Asserts that what immediately follows the current position in the string is "pattern"
// Negative lookahead
// (?!pattern) // Asserts that what immediately follows the current position in the string is not "pattern"
g // Global search
i // Case-insensitive search
m // Multi-line search