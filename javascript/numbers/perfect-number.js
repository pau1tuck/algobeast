/* Instructions: Write a function to determine if a given number is a perfect number.
A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding the number itself.
For example, 28 is a perfect number because its proper divisors are 1, 2, 4, 7, and 14, and their sum is 28.
Input: An integer, n.
Output: A boolean, true if the number is a perfect number, otherwise false. */

function isPerfectNumber(n) {
    if (n <= 1) return false; // 0, 1, and negative numbers cannot be perfect numbers.

    let sum = 1; // Start with 1 because it's always a divisor (except for 0 and 1, already handled above).

    // Loop from 2 to the square root of n. Every divisor found less than the square root will have a corresponding divisor greater than the square root.
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) sum += n / i; // Add the corresponding divisor greater than the square root, except when i is the square root itself.
        }
    }
    // A perfect number is equal to the sum of its divisors (excluding itself).
    return sum === n;
}
/* As for the complexity, the time complexity is O(√n) because the loop runs up to the square root of n.
The space complexity is O(1) since a fixed amount of space is used regardless of the input size. */
console.log(isPerfectNumber(28)); // true
