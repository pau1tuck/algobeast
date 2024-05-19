/* Instructions: Write a function to find the greatest common denominator (GCD) of two integers.
Input: Two integers, a and b.
Output: An integer representing the GCD of the two numbers. */

const gcd = (a, b) => {
    while (b != 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
};
// Time Complexity: O(log(min(a, b))) - Because the Euclidean algorithm's performance depends logarithmically on the smaller of the two numbers.
// Space Complexity: O(1) - Uses a constant amount of space.

const gcdEuclid = (x, y) => {
    // if (typeof x !== "number" || typeof y !== "number") return false;
    // x = Math.abs(x);
    // y = Math.abs(y);

    let gcd = null;

    if (x === y) {
        gcd = x;
    } else if (x > y) {
        gcd = euclidianGCD(x - y, y);
    } else if (x < y) {
        gcd = euclidianGCD(x, y - x);
    }
    return gcd;
};
