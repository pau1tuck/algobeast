//* Given a two-digit integer n, add both digits together.
//* For example, n = 23 returns 5.
//* Input: int n, Output: int

function sumTwoDigits(n) {
    // Digit_1 = n / 10 floored to integer
    // Digit_2 = remainder of n/10 (= n % 10)
    return Math.floor(n / 10) + (n % 10);
}

//? Time: O(1) Space: O(1)
