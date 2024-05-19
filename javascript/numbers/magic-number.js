/* Instructions: Write a function to determine if a given number is a magic number.
A common definition of a magic number is one where the sum of its digits, when recursively added, results in 1.
For instance, the number 19 is a magic number because the sum of its digits, 1 + 9 = 10, and 1 + 0 = 1.
Input: An integer, n.
Output: A boolean, true if the number is a magic number, otherwise false. */

function isMagicNumber(n) {
    const seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = sumOfDigitsSquared(n);
    }

    return n === 1;
}
function sumOfDigitsSquared(num) {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}
// Time Complexity: O(log n) on average, due to the reduction in size of the number at each step of digit squaring.
// Space Complexity: O(log n), because of the storage of seen numbers in the worst case.
