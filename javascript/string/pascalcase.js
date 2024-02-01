//! *** PASCAL CASE ***
/* Given a sentence, write a function that capitalizes the first letter of each word while ensuring the rest of the letters in each word are in lower case. */

const toPascalCase = sentence => {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalizes the first letter of each word and lowercases the rest
        .join(" "); // Joins the words back into a sentence
};

/* Time Complexity: O(n) - Because we're going through each character of the sentence essentially twice (once to lowercase, once to capitalize the first letters), it's linear based on the sentence length.

Space Complexity: O(n) - We create a new string that's roughly the same size as the input, so the space needed grows linearly with the input size. */
