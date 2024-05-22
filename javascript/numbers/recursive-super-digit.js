/**
 * Solves the HackerRank "Recursive Digit Sum" problem.
 * Instructions:
 * 1. Convert the string `n` into its individual digits and sum them up.
 * 2. Multiply the sum of the digits by `k` to simulate the repetition of `n`, `k` times.
 * 3. Recursively calculate the super digit of the resulting large number until a single digit is obtained.
 * 4. The final single digit is the super digit, which is returned as the result.
 *
 * Input: The first line contains two space-separated integers, n and k.
 * Output: int - the super digit of n repeated k times.
 *
 * @param {string} n - The initial number as a string.
 * @param {number} k - The number of times to repeat n.
 * @return {number} - The super digit.
 */
function superDigit(n, k) {
    // Base case: if n has only one digit, return it as the super digit
    if (n.length === 1 && k === 1) {
        return parseInt(n);
    }
    // Calculate the sum of digits of n
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += parseInt(n[i]);
    }
    // Multiply the sum by k and convert it back to a string
    sum *= k;
    // Recursive call with the new number and k=1
    return superDigit(sum.toString(), 1);
}
/**
 * Time Complexity: O(log(NK)), where N is the number of digits in the original number
 * and K is the repetition factor. Each recursive step significantly reduces the number of digits.
 * Space Complexity: O(log(NK)), due to the recursion stack and the space needed for the new string representation of numbers.
 */
