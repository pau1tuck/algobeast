const fibonacciRecursive = num => {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}; // O(2^n)

/* Problem: Calculate the n-th Fibonacci number using an iterative approach. */

const nthFibonacciIterative = (num) => {
	let a = 0;
	let b = 1;
	for (let i = 0; i < num; i++) {
		const tmp = a;
		a = b;
		b = tmp + b;
	}
	return b;
}; // O(n) time, O(1) space/memory