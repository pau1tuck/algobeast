/**
 * Time __ | Space __
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
//

/* Given two strings s and p,
return an array of all the start indices of p's anagrams in s.
You may return the answer in any order.*/
// Sliding window + frequency map
// a-z = 97 - 122

const findAnagrams = (s, p) => {
    let pMap = new Array(26).fill(0),
        sMap = new Array(26).fill(0),
        result = [];

    // Populate frequency array for string p:
    for (let i = 0; i < p.length; i++) {
        // Convert letter to its unique index and increment its count in pMap.
        pMap[p.charCodeAt(i) - 97]++;
    }

    // Iterate over s with a sliding window approach:
    for (let i = 0; i < s.length; i++) {
        // Add the new character to sMap.
        // Convert letter to its unique index and increment its count in sMap.
        sMap[s.charCodeAt(i) - 97]++;

        // When the window size exceeds p.length, remove the leftmost character from sMap.
        if (i >= p.length) {
            sMap[s.charCodeAt(i - p.length) - 97]--;
        }

        // Check if pMap and sMap are the same.
        // If they are, it means we found an anagram starting at index i - p.length + 1.
        if (pMap.join("") === sMap.join("")) {
            result.push(i - p.length + 1);
        }
    }

    return result;
};
