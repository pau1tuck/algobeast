/* Given a two-digit integer n, add both digits together.
For example, n = 23 returns 5. */

function addTwoDigits(n) {
    return Math.floor(n / 10) + n % 10;
}
//? O(1) time | O(1) space

