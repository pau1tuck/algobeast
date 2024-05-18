/* Prime Factorization: Write a function that takes an integer as input and returns an array of its prime factors. */

// Input: int n, Output: [int]

export const primeFactors = (n) => {
    const factors = []; // Holding array
    for (let i = 2; i * i <= n; i++) {
        // Limit to i² <= n
        while (n % i === 0) {
            // n / factor is even
            factors.push(i);
            n = Math.floor(n / i);
        }
    }
    if (n > 1) {
        factors.push(n);
    }
    return factors;
};

// Time complexity: O(n ** 0.5) OR O(sqrt(n))
// Space complexity: O(log n)

/* Prime factorization plays a crucial role in cryptography, especially in algorithms like RSA (Rivest-Shamir-Adleman). Here's how it's used:

RSA Algorithm: RSA encryption is based on the principle that it's easy to multiply two large prime numbers together, but much harder to factorize their product back into the original primes.

Security: The security of RSA relies on the difficulty of prime factorization. The larger the key (i.e., the product of the two primes), the more secure the encryption, because it becomes increasingly difficult to factorize.

This reliance on prime factorization is precisely why advancements in quantum computing pose a potential threat to current cryptographic methods. Quantum algorithms like Shor's algorithm can theoretically factorize large numbers much more efficiently than classical algorithms. */
