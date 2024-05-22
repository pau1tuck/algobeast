/**
 * Instructions:
 * 1. Take two arrays as input: `strings` (an array of strings to search within)
 *    and `queries` (an array of strings to find in the `strings` array).
 * 2. Create a hashmap to store the count of each string in the `strings` array.
 * 3. Initialize the hashmap by iterating over the `strings` array and counting
 *    each string occurrence.
 * 4. Initialize a result array to store the counts for each query.
 * 5. For each string in the `queries` array, use the hashmap to find the count
 *    of that string in the `strings` array and add the count to the result array.
 * 6. Return the result array containing the counts for each query.
 * Input: Two arrays - `strings` (array of strings), `queries` (array of strings).
 * Output: Array of integers - counts of each query string in the `strings` array.
 * @param {string[]} strings - The array of strings to be searched.
 * @param {string[]} queries - The array of strings to find in the `strings` array.
 * @return {number[]} - An array of counts corresponding to the occurrence of each query in `strings`.
 */
function matchingStrings(strings, queries) {
    const map = {};
    const results = [];
    // Fill the hashmap with counts of each string in `strings`.
    for (const string of strings) {
        if (string in map) {
            map[string]++;
        } else {
            map[string] = 1;
        }
    }
    // Compute the results for each query based on the hashmap.
    for (const query of queries) {
        if (query in map) {
            results.push(map[query]);
        } else {
            results.push(0);
        }
    }
    return results;
}
// Example usage:
console.log(matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])); // Outputs: [2, 1, 0]
/**
 * Time Complexity: O(n + m), where n is the number of elements in `strings` and
 * m is the number of queries. This is because each array is only iterated over once.
 * Space Complexity: O(n), where n is the number of distinct strings in `strings`.
 * This space is used to store counts in the hashmap.
 */
