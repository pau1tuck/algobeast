// strings = ["ab", "ab", "abc"]
// queries = ["ab", "abc", "bc"]
function matchingStrings(strings, queries) {
    // STAGE 1
    let stringMap = {}; // Create a hash map to store string frequency.
    strings.forEach(string => {
        // "ab"
        if (string in stringMap) {
            stringMap[string]++;
        } else {
            stringMap[string] = 1; // {ab: 1}
        }
    });
    let results = []; // STAGE 2
    queries.forEach(query => {
        // Query hash map and push results to results array.
        if (query in stringMap) {
            results.push(stringMap[query]);
        } else {
            results.push(0);
        }
    });
    return results;
}
