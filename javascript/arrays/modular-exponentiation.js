/* Instructions: Write a function to compute (base^exponent) % modulus efficiently.
Input: Three integers, base, exponent, and modulus.
Output: An integer representing the result of (base^exponent) % modulus.
This challenge involves calculating the result of a number raised to a power, then taking the modulus of that result with another number. This is particularly useful in fields like cryptography where large exponentiations are common and need to be managed within reasonable numerical limits. */

function modularExponentiation(base, exponent, modulus) {
    if (modulus === 1) return 0; // Since any number modulo 1 is 0.
    let result = 1; // Start with the result of 1.
    base = base % modulus; // Update base to be within the bounds of modulus.
    while (exponent > 0) {
        if (exponent % 2 == 1) {
            // If exponent is odd, multiply the base with result.
            result = (result * base) % modulus;
        }
        exponent = exponent >> 1; // Divide the exponent by 2.
        base = (base * base) % modulus; // Square the base.
    }
    return result;
}
// Time: O(log exponent), as each step effectively halves the exponent; Space: O(1) uses a fixed amount of space.
