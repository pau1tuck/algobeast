/* Instructions:
Declare a 2-dimensional array, `arr`, of `n` empty arrays. All arrays are zero-indexed.
Declare an integer, `lastAnswer`, and initialize it to 0.

There are 2 types of queries, given as an array of strings for you to parse:
1. **Query 1**: `1 x y`
    1. Calculate `idx = (x ^ lastAnswer) % n`.
    2. Append the integer `y` to `arr[idx]`.
2. **Query 2**: `2 x y`
    1. Calculate `idx = (x ^ lastAnswer) % n`.
    2. Set `lastAnswer` to the value at `arr[idx][y % size(arr[idx])]`, where `size(arr[idx])` is the number of elements in `arr[idx]`.
    3. Store this new value of `lastAnswer` to an answers array.

Input:
- The first line contains two space-separated integers, `n` (the number of empty arrays to initialize in `arr`) and `q` (the number of queries), respectively.
- Each of the `q` subsequent lines contains a query string, `queries[i]`, that contains 3 space-separated integers.

Output:
Output the results of each type 2 query in the order they are presented. */

function dynamicArray(n, queries) {
    let arr = Array(n).fill().map(() => []);
    let answer = [];
    let lastAnswer = 0;
    const queryOne = (x, y) => {
        let idx = (x ^ lastAnswer) % n;
        arr[idx].push(y);
    }
    const queryTwo = (x, y) => {
        let idx = (x ^ lastAnswer) % n;
        lastAnswer = arr[idx][y % arr[idx].length];
        answer.push(lastAnswer);
    }
    for (let q of queries) {
        if (q[0] === 1) {
            queryOne(q[1], q[2]);
        } else if (q[0] === 2) {
            queryTwo(q[1], q[2]);
        }
    }
    return answer;
}
// Example input as a single string
const input = `2 5
    1 0 5
    1 1 7
    1 0 3
    2 1 0
    2 1 1`;
// Call the function with the entire input as a string
console.log(dynamicArray(input)); // Should output the results of type 2 queries
// Example usage
const n = 2;
const queries = ["1 0 5", "1 1 7", "1 0 3", "2 1 0", "2 1 1"];
console.log(dynamicArray(n, queries));  // Output expected from type 2 queries
