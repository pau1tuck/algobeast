/* Instructions: Write a function to determine if a given integer is a power of two.
This means checking if the number can be expressed as 2^k where k is a non-negative integer.
For example, given the number 16, which can be expressed as 2^4, the function should return true.
For the number 18, which cannot be expressed as a power of two, the function should return false.
Input: A non-negative integer, num.
Output: A boolean indicating whether or not num is a power of two. */

function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}
// Example usage
console.log(isPowerOfTwo(16)); // Outputs true
console.log(isPowerOfTwo(18)); // Outputs false

/* The solution leverages a neat trick: for numbers that are powers of two, the binary representation has exactly one '1' bit, and all other bits are '0'. Subtracting '1' from such a number flips all the bits after the '1' bit, which means n & (n - 1) will be '0' if n is a power of two. This check ensures that only one bit in the number is set to '1'. */