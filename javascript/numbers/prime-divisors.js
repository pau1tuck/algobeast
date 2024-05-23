/* Instructions:
Check if two arrays of integers have corresponding elements with the same set of prime divisors.
Input: int[], int[]: Two non-empty arrays A and B of integers.
Output: int: The number of positions K where the prime divisors of A[K] and B[K] are exactly the same. */

function gcd(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}
function hasSamePrimeDivisors(x, y) {
    const commonGCD = gcd(x, y);
    while (x !== 1) {
        const gcdX = gcd(x, commonGCD);
        if (gcdX === 1) break;
        x /= gcdX;
    }
    while (y !== 1) {
        const gcdY = gcd(y, commonGCD);
        if (gcdY === 1) break;
        y /= gcdY;
    }
    return x === 1 && y === 1;
}
function solution(A, B) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        if (hasSamePrimeDivisors(A[i], B[i])) {
            count++;
        }
    }
    return count;
}   // Time Complexity: O(N * (log(A[i]) + log(B[i]))), where N is the length of the arrays.
    // Space Complexity: O(1)
