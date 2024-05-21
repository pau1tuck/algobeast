/* Instructions: Given an integer, reverse its bits.
For example, if the binary representation of the integer is '00000010100101000001111010011100',
then after reversing the bits it should become '00111001011110000010100101000000'.
Input: A non-negative integer, num.
Output: The integer resulting from reversing the bits of the input. */

function reverseBits(num) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result <<= 1;
        result |= num & 1;
        num >>= 1;
    }
    return result >>> 0; // Use unsigned right shift to ensure the result is non-negative
}
// Example usage
const input = 43261596;
console.log(reverseBits(input)); // Outputs 964176192