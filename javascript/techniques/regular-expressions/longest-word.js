//? REGULAR EXPRESSIONS

/* You'll be given a string of words, possibly including punctuation and special characters.
Your task is to find the longest word within that string.
If there are two or more words of the same length that qualify as the longest, just return the first one you encounter. */

function longestWord(sentence) {
	// Strip off non-alphabetic characters and split the string into an array of words
	const words = sentence.split(/\W+/);

	// Iterate through the array of words to find the longest one using for...of
	let longest = "";
	for (const word of words) {
		if (word.length > longest.length) {
			longest = word; // Update longest if the current word is longer
		}
	}
	// Return the longest word
	return longest;
}

/* Explanation: The function starts by using a regular expression (/\W+/) to split the input sentence into an array of words. The pattern \W+ matches one or more non-word characters, effectively separating words and removing punctuation and special characters.
An empty string is assigned to longest to initialize the variable that will hold the longest word.

A for...of loop is used to iterate over each word in the words array. This loop provides a clear and concise way to go through each element of the array.

Within the loop, the function checks if the length of the current word is greater than the length of the current longest word. If so, longest is updated to this new word.

After the loop has finished executing, the longest word found during the iteration is returned.

This approach, using a for...of loop, aligns with modern JavaScript practices, offering readability and efficiency in handling the array of words to find the longest one.
*/
