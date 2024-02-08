//? ITERATIVE TECHNIQUES

/* Problem: Calculate the n-th Fibonacci number using an iterative approach. */

const nthFibonacciIterative = (num) => {
	let a = 0;
	let b = 1;
	for (let i = 0; i < num; i++) {
		const temp = a;
		a = b;
		b = temp + b;
	}
	return b;
}; // O(n) time, O(1) space/memory
