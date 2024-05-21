/* Instructions: Write a function to flip the bits of a 32-bit unsigned integer.
This means converting all '0' bits to '1' and all '1' bits to '0'.
Input: A non-negative integer, n.
Output: The integer resulting from flipping the bits of the input. */

function flipBits(n) {
    let flipped = 0;
    for (let i = 0; i < 32; i++) {
        // Check if the lowest bit is 1 and flip it
        flipped <<= 1;  // Shift all bits to the left to make room for the next bit
        flipped |= (n & 1) ^ 1;  // Add the flipped bit
        n >>= 1;  // Move to the next bit
    }
    return flipped >>> 0;  // Ensure the result is treated as an unsigned 32-bit integer
} // Time: O(32), Space: O(1)

// ========================================
function flipBits(n) {
    // A 32-bit unsigned integer has a maximum value of 2^32 - 1, which in binary is a series of 32 '1's.
    // XORing n with this value will flip all bits.
    return ~n >>> 0;
} // Time: O(1), Space: O(1)
// Example usage
console.log(flipBits(0));       // Outputs 4294967295
console.log(flipBits(4294967295)); // Outputs 0


// ~n: This is the bitwise NOT operator in JavaScript. What it does is flip every bit of the number n.
// For example, if n is represented in binary as 00000000000000000000000000000010 (which is 2 in decimal),
// then ~n will be 11111111111111111111111111111101.
// This operation flips all 0s to 1s and all 1s to 0s.

// >>> 0: This is the unsigned right shift operator. It shifts the bits of its left operand (the result of ~n)
// zero places to the right. While shifting zero places might seem pointless, the key effect of this operation
// in JavaScript is that it forces the result to be interpreted as an unsigned 32-bit integer.
// Without this, the result of ~n could be interpreted as a signed integer, leading to potentially negative values.

// For example, ~2 results in -3 when interpreted as a signed 32-bit integer because the most significant bit
// (the leftmost one) is treated as the sign bit. By applying >>> 0, JavaScript is forced to interpret the result
// as an unsigned integer, thereby eliminating any sign concerns and ensuring the number is within the range of 0 to 2^32 - 1.