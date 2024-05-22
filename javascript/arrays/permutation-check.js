/* Instructions: A non-empty array A consisting of N integers is given.
A permutation is a sequence containing each element from 1 to N once, and only once.
For example, array A such that:
    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:
    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.
The goal is to check whether array A is a permutation. */

function permCheck(A) {
    const n = A.length;
    const elements = new Set(A);
    // Check if size of set matches the array length and every element from 1 to n is present
    if (elements.size !== n) {
        return false; // Immediate return if there are duplicates or different count of elements
    }
    for (let i = 1; i <= n; i++) {
        if (!elements.has(i)) {
            return false; // Return 0 if any required element is missing
        }
    }
    return true; // The array is a valid permutation
} // Time: O(n), where n is the number of elements in array A; Space: O(n), to hold the set of elements.