/* Instructions: Determine if a given substring (pattern) appears within a given string (text) and, if so, at which positions it starts.
Input: string `text` and string `pattern`.
Output: arr[int], the positions of the text in the string. */

function naiveSearch(text, pattern) {
    let positions = [];
    for (let i = 0; i <= text.length - pattern.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (text[i + j] !== pattern[j]) {
                break;
            }
        }
        if (j === pattern.length) {
            positions.push(i);
        }
    }
    return positions;
}

// ======================================
function buildLPS(pattern) { // Longest Prefix which is also Suffix
    let lps = Array(pattern.length).fill(0);
    let length = 0;
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = lps[length - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

function kmpSearch(text, pattern) { // Knuth-Morris-Pratt search
    let lps = buildLPS(pattern);
    let i = 0; // index for text
    let j = 0; // index for pattern
    let result = [];

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }
        if (j === pattern.length) {
            result.push(i - j);
            j = lps[j - 1];
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    return result;
} // Time: O(n + m), where n is the length of the text and m is the length of the pattern.
// Space: O(m), space is used to store the LPS (Longest Prefix which is also Suffix) array for the pattern.