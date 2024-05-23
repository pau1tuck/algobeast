/* Prime Factorization: Write a function that takes an integer as input and returns an array of its prime factors. */
// Input: int n, Output: [int]

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

/* Prime factorization plays a crucial role in cryptography, especially in algorithms like RSA (Rivest-Shamir-Adleman). Here's how it's used:

RSA Algorithm: RSA encryption is based on the principle that it's easy to multiply two large prime numbers together, but much harder to factorize their product back into the original primes.

Security: The security of RSA relies on the difficulty of prime factorization. The larger the key (i.e., the product of the two primes), the more secure the encryption, because it becomes increasingly difficult to factorize.

This reliance on prime factorization is precisely why advancements in quantum computing pose a potential threat to current cryptographic methods. Quantum algorithms like Shor's algorithm can theoretically factorize large numbers much more efficiently than classical algorithms. */