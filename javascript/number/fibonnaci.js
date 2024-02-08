const fibonacciRecursive = (num) => {
	if (num <= 1) return num;
	return fibonacci(num - 1) + fibonacci(num - 2);
}; // O(2^n)
