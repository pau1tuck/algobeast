// 7! = 1 * 2 * 3 * 4 * 5 * 6 * 7 = 5040
const factorialize = (n) => {
    // if (n < 0) return -1; // Edge case: n is negative
    // if (n === 0) return 1; // Edge case: note: 0! = 1.

    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}; // O(n) time, O(1) space/memory

// -----------------------------------------
// -----------------------------------------

const factorializeRecursion = (n) => {
    // recursion
    if (n < 0) return -1;
    else if (n === 0) return 1;
    else {
        return n * factorializeRecursion(n - 1);
    }
}; // O(n) time, O(n) space/memory
