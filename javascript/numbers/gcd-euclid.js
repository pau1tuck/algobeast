//* Write a function that returns the greatest common divisor (GCD) of two integers.

const euclidianGCD = (x, y) => {
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
