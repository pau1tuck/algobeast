// Check two strings to see if they are anagrams.

const makeFrequencyMap = (str) => {
	const frequencyMap = {};

	for (const char of str) {
		// e.g. "s" of "strings"
		frequencyMap[char] = (frequencyMap[char] || 0) + 1;
		// 1. Hashmap "s" value = (falsy, so 0) + 1 = 1; now {"s": 1} exists in the frequency map.
		// 2. Hashmap "s" value = 1 + 1 = 2
	}
	return frequencyMap;
};

const areAnagrams = (str1, str2) => {
	if (str1.length !== str2.length) {
		return false;
	}
	const frequencyMap1 = makeFrequencyMap(str1.toLowerCase());
	const frequencyMap2 = makeFrequencyMap(str2.toLowerCase());

	for (const char in frequencyMap1) {
		if (frequencyMap1[char] !== frequencyMap2[char]) {
			return false;
		}
	}
	return true;
};

function removeSpacesAndPunctuation(str) {
	// Optional
	return str.replace(/[^\w]/g, ""); // Remove non-word characters
}

areAnagrams("listen", "silent"); // true
