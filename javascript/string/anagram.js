/* CHECK PERMUTATION / ANAGRAM */

// Build a frequency map of characters from a given string.
const makeFrequencyMap = str => {
    const frequencyMap = {};

    for (const char of str) {
        // e.g. "s" of "strings"
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
        // 1. Hashmap "s" value = (falsy, so 0) + 1 = 1; now {"s": 1} exists in the frequency map.
        // 2. Hashmap "s" value = 1 + 1 = 2
    }
    // Return the frequency map object.
    return frequencyMap;
};

/*** ----------------------------------------------------------------------------- ***/
// Determine if two strings are anagrams:
const areAnagrams = (str1, str2) => {
    // If the lengths of the two cleaned strings are different, they cannot be anagrams.
    if (str1.length !== str2.length) {
        return false;
    }

    // Build a frequency map for each string:
    const frequencyMap1 = makeFrequencyMap(str1.toLowerCase());
    const frequencyMap2 = makeFrequencyMap(str2.toLowerCase());

    // Loop through each character key in the first frequency map:
    for (const char in frequencyMap1) {
        // Compare the frequency of the current character in both maps.
        // If they don't match for any character, the strings are not anagrams.
        if (frequencyMap1[char] !== frequencyMap2[char]) {
            return false;
        }
    }
    // If the function hasn't returned false by this point, the strings are anagrams.
    return true;
};

areAnagrams("listen", "silent"); // true

/*** ------------------------------------------------------------------------------ ***/
/*** Optional error handling: ***/
function removeSpacesAndPunctuation(str) {
    return str.replace(/[^\w]/g, ""); // Remove non-word characters
}
