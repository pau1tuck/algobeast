/* Instructions:
Take a positive integer N as input.
Iterate through all integers from 1 to the square root of N to check for factors.
If i (current number in loop) is a factor of N, count it.
Additionally,check if N / i is also a factor and different from i, then count it as well.
Return the total count of factors.
Input: A single positive integer, N.
Output: Returns the number of distinct factors of N. */

function countFactors(N) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(N); i++) {
        if (N % i === 0) { // i is a factor of N
            if (i === N / i) {
                // If the divisors are the same, count only once (perfect square case)
                count++;
            } else {
                // Count both divisors
                count += 2;
            }
        }
    }
    return count;
}
/* Time Complexity: O(√N): The function only iterates up to the square root of N.
For each factor found that is less than the square root,
there is typically a corresponding factor greater than the square root,
thus reducing the number of iterations significantly compared to iterating up to N.
Space Complexity: O(1): The space used by the algorithm is constant,
regardless of the input size. Only a fixed number of variables (count, i) are used. */
