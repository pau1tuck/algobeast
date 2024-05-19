/* Instructions: Write a function that converts a non-negative integer into its binary representation as a string.
Input: A non-negative integer, n.
Output: A string representing the binary equivalent of the integer n. */

function binaryConversion(n) {
    if (n === 0) return "0"; // Handle the edge case for 0 explicitly.

    let binary = "";
    while (n > 0) {
        binary = (n % 2) + binary; // Prepend the result of n % 2 to the binary string.
        n = Math.floor(n / 2); // Divide n by 2 to get the next bit.
    }
    return binary;
}
// Time Complexity: O(log n) - As the function essentially divides the number by 2 in each iteration.
// Space Complexity: O(log n) - The output string length grows logarithmically with the input size.
