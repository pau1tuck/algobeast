/* Given an integer n, return the largest number that contains exactly n digits. */

function largestNumber(n) {     // e.g. 3
    return 10 ** n - 1          // e.g. 1,000 - 1 = 999
}