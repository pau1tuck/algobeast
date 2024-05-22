// strings = ["ab", "ab", "abc"]
// queries = ["ab", "abc", "bc"]
function matchingStrings(strings, queries) {
    const map = {};
    const results = [];

    for (const string of strings) {
        if (string in map) {
            map[string]++;
        } else {
            map[string] = 1;
        }
    }
    for (const query of queries) {
        if (query in map) {
            results.push(map[query]);
        } else {
            results.push(0);
        }
    }
    return results;
}
/* KNUTH-MORRIS-PRATT ?? */