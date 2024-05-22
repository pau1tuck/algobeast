/* Instructions: There are two n-element arrays of integers, A and B.
Permute them into some A and B such that the relation A[i] + B[i] > k holds for all `i` where 0 < i < n.
There will be q queries consisting of A. B, and k. For each query,
return YES if some permutation A, B satisfying the relation exists; otherwise, return NO.
Example:
A = [0, 1]
B = [0, 2]
k = 1
A valid A, B is A = [1, 0] and B = [0, 2]: 1 + 0 ≥ 1 and 0 + 2 ≥ 1. Return YES. */

function permuteArrays(k, A, B) {
    // Sort A in ascending order
    A.sort((a, b) => a - b);x
    B.sort((a, b) => b - a);
    // Check if all pairs across A and B satisfy the condition
    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return "NO";
        }
    }
    return "YES";
} // Time: 𝑂(𝑛 log 𝑛), Space: O(1)

