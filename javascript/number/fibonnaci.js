const fibonacciRecursive = num => {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}; // O(2^n)

/* Problem: Calculate the n-th Fibonacci number using an iterative approach. */

const nthFibonacciIterative = (num) => {
    let a = 0;
    let b = 1;
    for (let i = 1; i < num; i++) { // Starting from 1 since we already defined the first two numbers
        const tmp = a;
        a = b;
        b = tmp + b;
    }
    return a; // Return 'a' for the n-th number
}; // O(n) time, O(1) space/memory

const nthFibonacciRecursive = (num) => {
	if (num <= 1) return num; // Base cases: return 'num' if it's 0 or 1
	return nthFibonacciRecursive(num - 1) + nthFibonacciRecursive(num - 2);
  };
