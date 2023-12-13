/* FIBONNACI SEQUENCE
Each number is the sum of the two preceding ones.
e.g., 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on.
*/

// Find the n-th number in the sequence.
function fibonacci(n) {
    // Create a memoization hashmap to store the results of previous calculations
    const memo = {};
    // Recursive helper function:
    function fib(n) {
        // If n is already calculated, return its value from the memo
        if (memo[n]) return memo[n];

        //* Base cases = return n for the first two numbers of the sequence
        if (n <= 1) return n;

        //* Recursive step = calculate and store the result in the memo hashmap
        return memo[n] = fib(n - 1) + fib(n - 2);
    }
    // Call the helper function and return its final result
    return fib(n);
}

// Example usage
console.log(fibonacci(10)); // Outputs 55

/* VISUAL REPRESENTATION (without memo)
fib(5) is the sum of fib(4) and fib(3).
But what are fib(4) and fib(3)? We use recursion to break those down further:
fib(4) is the sum of fib(3) and fib(2).
fib(3), as we've seen, needs to be calculated too. It's the sum of fib(2) and fib(1).
If we keep breaking it down, we eventually reach the base cases (fib(1) = 1, and fib(0) = 0),
*/

fib(5)
├── fib(4)
│   ├── fib(3)
│   │   ├── fib(2)
│   │   │   ├── fib(1) [returns 1]
│   │   │   └── fib(0) [returns 0]
│   │   └── fib(1) [returns 1]
│   └── fib(2)
│       ├── fib(1) [returns 1]
│       └── fib(0) [returns 0]
└── fib(3)
    ├── fib(2)
    │   ├── fib(1) [returns 1]
    │   └── fib(0) [returns 0]
    └── fib(1) [returns 1]