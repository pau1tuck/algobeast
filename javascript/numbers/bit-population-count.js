/* Instructions: Write a function to determine the number of '1' bits an unsigned integer has (also known as the Hamming weight).
For example, given the integer 11 (binary representation '00000000000000000000000000001011'), the function should return 3, since there are three '1' bits.
Input: A non-negative integer, num.
Output: An integer representing the number of '1' bits in the binary representation of num. */

function hammingWeight(n) {
    let count = 0;
    while (n !== 0) {
        count += n & 1;
        n >>>= 1; // Use unsigned right shift to handle the loop correctly on negative numbers if treated as signed
    }
    return count;
}
// Example usage
const input = 11;
console.log(hammingWeight(input)); // Outputs 3
