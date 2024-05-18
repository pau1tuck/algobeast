/* Prime Check: Write an algorithm to determine if a given n is a prime n. */
// input: n: int, output: boolean

const PrimeCheck = (n) => {
    if (n <= 1) return false; // Edge case
    if (n === 2) return true; // Edge case

    for (let i = 2; i * i <= n; i++) {
        // Limit to i² <= n
        if (n % i === 0) {
            return false; // Found a divisor
        }
    }
    return true;
};

// Time complexity: O(√n)
// Space complexity: O(1) (constant)

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
