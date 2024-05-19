/* Instructions: Write a function to find the greatest common denominator (GCD) of two integers.
Input: Two integers, a and b.
Output: An integer representing the GCD of the two numbers. */

function gcd(a, b) {
    while (b != 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}
// Time Complexity: O(log(min(a, b))) because the Euclidean algorithm's performance depends logarithmically on the smaller of the two numbers.
// Space Complexity: O(1) uses a constant amount of space.
