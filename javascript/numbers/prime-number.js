/* Prime Check: Write an algorithm to determine if a given n is a prime n. */
// input: n: int, output: boolean

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
} // Time: O(n) where 𝑛 is the input number num because the loop runs from 2 to num - 1.
// Space: O(1), because the function uses a constant amount of extra space regardless of the input size.

const PrimeCheck = (n) => {
    if (n <= 1) return false; // Edge case
    if (n === 2) return true; // Edge case

    // Limit to i² <= n:
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false; // Found a divisor
        }
    }
    return true;
}; // Time: O(√n), Space: O(1) (constant)
