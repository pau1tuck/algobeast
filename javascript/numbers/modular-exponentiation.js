/* Instructions: Write a function to compute `(base ^ exponent) % modulus` efficiently.
Input: Three integers, base, exponent, and modulus.
Output: An integer representing the result of (base^exponent) % modulus. */

function modularExponentiation(base, exponent, modulus) {
    if (modulus === 1) return 0; // Since any number modulo 1 is 0.
    let result = 1; // Start with the result of 1.
    base = base % modulus; // Update base to be within the bounds of modulus.
    while (exponent > 0) {
        if (exponent % 2 == 1) {
            // If exponent is odd, multiply the base with result.
            result = (result * base) % modulus;
        }
        exponent = exponent >> 1; // Divide the exponent by 2 using fast bitwise operator.
        base = (base * base) % modulus; // Square the base.
    }
    return result;
}
// Time: O(log exponent), as each step effectively halves the exponent; Space: O(1) uses a fixed amount of space.

/* This is particularly useful in fields like cryptography where large exponentiations are common and need to be managed within reasonable numerical limits. */

/* 1. Handling Large Numbers: Straightforwardly calculating `base ^ exponent` can result in extremely large numbers, especially for large values of exponent. Such large numbers are difficult to handle with standard integer types in most programming environments due to overflow issues.

Efficiency: The modular exponentiation algorithm uses a technique known as "exponentiation by squaring" which reduces the number of multiplicative operations needed. This is significantly faster, especially for large exponents, compared to multiplying the base repeatedly in a simple loop.

Maintaining Manageable Numbers: By continuously taking modulo modulus during the calculation, the numbers involved in the computation are kept within a manageable range, preventing overflow and reducing computation times.