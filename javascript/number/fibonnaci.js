const fibonacci = num => { // recursion
    if (num <= 1) return num;
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}; // O(2^n)
