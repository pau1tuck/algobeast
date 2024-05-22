const findPrimeFactors = (num) => {
    const factors = []; // This will store the prime factors
    // Divide out all 2s first
    while (num % 2 === 0) {
      factors.push(2);
      num = num / 2;
    }
    // Now check for odd factors
    for (let i = 3; i * i <= num; i += 2) {
      while (num % i === 0) {
        factors.push(i);
        num = num / i;
      }
    }
    // If the remaining number is a prime greater than 2
    if (num > 2) {
      factors.push(num);
    }
    return factors;
  }; // O(sqrt(n)) time, O(log n) space/memory
  /* In this function, the main loop runs until i * i <= num, which essentially goes up to the square root of num.
  Therefore, the time complexity is O(sqrt(n)), where n is the number you're finding the prime factors of.
  This makes the algorithm quite efficient for large numbers. */
  /* The space complexity is O(log n) because in the worst case (when n is a product of 2's),
  the number of factors (and hence the size of the factors array) will be proportional to the logarithm of n. */