//! *** LONGEST WORD ***/
/* You'll be given a string of words, possibly including punctuation and special characters.
Your task is to find the longest word within that string.
If there are two or more words of the same length that qualify as the longest, just return the first one you encounter. */

//? Solution
/* 1. Use a regular expression to strip off non-alphabetic characters and split the string into an array of words.
2. Iterate through this array using Array.forEach(). Check and keep track of the longest word you've encountered so far in a holding variable (longest)
3. Return the longest word once you've checked each. */

const longestWord = () => {
    const words = str.replace(/[^a-zA-Z\s]/g, "").split(" ");

    let longest = "";
    words.forEach(word => {
        if (word.length > longest.length) {
            longestWord = word;
        }
    });

    return longest;
};
console.log(longestWord("Let's find the longest_word in this string!"));
