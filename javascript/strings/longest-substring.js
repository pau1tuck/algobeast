// Given a string, you need to find the length of the longest substring without repeating characters,
// e.g. For the string "abcabcbb", the longest substring without repeating characters is "abc", with a length of 3.

function lengthOfLongestSubstring(string) {
    const seen = new Map();
    let start = 0;
    let maxLen = 0;

    for (let end = 0; end < string.length; end++) {
        if (seen.has(string[end])) {
            start = Math.max(seen.get(string[end]) + 1, start);
        }
        seen.set(string[end], end);
        maxLen = Math.max(maxLen, end - start + 1);
    }
    return maxLen;
}