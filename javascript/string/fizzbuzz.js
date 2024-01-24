/* The FizzBuzz algorithm iterates over a sequence of numbers (here from 1 to 100). For each number, if it is divisible by 3, it outputs "Fizz"; if divisible by 5, it outputs "Buzz"; if divisible by both 3 and 5, it outputs "FizzBuzz"; otherwise, it outputs the number itself. */

for (let i = 1; i <= 100; i++) {
    switch (true) {
        case i % 3 === 0 && i % 5 === 0:
            console.log("FizzBuzz");
            break;
        case i % 3 === 0:
            console.log("Fizz");
            break;
        case i % 5 === 0:
            console.log("Buzz");
            break;
        default:
            console.log(i);
    }
}
