/* Given a number n, write a function that uses the Sieve of Eratosthenes algorithm to find all the prime numbers up to n (inclusive).
The Sieve of Eratosthenes is an ancient algorithm used to find all prime numbers up to any given limit.
It does so by iteratively marking the multiples of each prime number starting from 2.
The challenge is to efficiently implement this algorithm to find and return an array of all prime numbers less than or equal to n.
Remember, a prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. */

function sieveOfEratosthenes(n) {
    let primes = Array(n + 1).fill(true); // Create an array of truth values, indexed by numbers 0 to n, initially set all to true.
    primes[0] = primes[1] = false; // 0 and 1 are not primes.

    for (let number = 2; number * number <= n; number++) {
        if (primes[number]) {
            // If the number is a prime, then go ahead and mark its multiples as not prime.
            for (let multiple = number * 2; multiple <= n; multiple += number) {
                primes[multiple] = false;
            }
        }
    }

    // Filter out the prime numbers and return them
    return primes.reduce((acc, isPrime, index) => {
        if (isPrime) acc.push(index);
        return acc;
    }, []);
}

// Example usage
console.log(sieveOfEratosthenes(30)); // This will print all prime numbers up to 30
