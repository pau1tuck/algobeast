/* Instructions: Given an array of integers, where all elements but one occur twice, find the unique element.
Input: `int a[n]`: an array of integers.
Output: `int`, the element that occurs only once. */

function uniqueElementXor(arr) {
    // [2,2,3,1,1,0,0]
    return arr.reduce((a, b) => a ^ b, 0); // acca = 3
} // Time: O(n), Space: O(1)

// =====================================
function uniqueElementHashMap(arr) {
    let hashMap = {};
    arr.forEach(num => {
        if (hashMap[num]) {
            // If number is already in the hash map, remove it.
            delete hashMap[num];
        } else {
            // Else, add it to the hash map.
            hashMap[num] = true;
        }
    });
    return Object.keys(hashMap)[0];
} // Time: O(n), Space: O(n)

/* XOR operation: Any number that appears twice will become 0.

This function, `lonelyinteger`, utilizes the XOR bitwise operator to find the unique number in an array.
The XOR operation has a unique property: for any number x, x ^ x = 0 and x ^ 0 = x.

The function uses the `reduce` method to apply the XOR operation across all elements of the array `a`.
The reduce method iterates over each element `b` in the array `a`, applying the XOR operation between
the current element `b` and an accumulator `a` (not to be confused with the array `a`), which initially
is set to 0 (as specified by the second parameter of reduce).

Here's the step-by-step breakdown of how it works:
1. Initially, the accumulator (`a`) is set to 0.
2. For each element in the array (`b`), it performs `a ^ b`.
   - If `b` has appeared an even number of times so far, the XOR operation cancels out the contributions of `b` (because x ^ x = 0).
   - If `b` appears an odd number of times (which is true for the lonely integer by the end of the array), the result will be `b` itself (since 0 ^ x = x).
3. By the end of the array, all integers that appeared twice will cancel themselves out, leaving only the lonely integer, which appears once.

Example:
- Consider the array [1, 2, 2, 3, 1].
- The XOR operation would compute as follows:
  ((0 ^ 1) ^ 2) ^ 2) ^ 3) ^ 1)
  Since 1 ^ 1 = 0 and 2 ^ 2 = 0, we are left with 0 ^ 3 = 3, which is the lonely integer.

This technique is very efficient because it only requires a single pass through the data (O(n) time complexity) and uses O(1) space, not counting the input array.
*/
function lonelyinteger(a) {
    return a.reduce((a, b) => a ^ b, 0);
}
