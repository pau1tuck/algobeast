/*** JAVASCRIPT NUMBERS ***/
Number()
parseInt(radix)

ValueOf()
// Nanoseconds to seconds:
const elapsed = time[0] + time[1] / 1e9;
elapsed.toFixed(3)

toPrecision()	  // Length
toExponential()

/*** toString() ***/
toString()
const num = 10;
num.toString()    // as String    "10"
num.toString(10)  // Decimal      "10.0"
num.toString(2)   // Binary       "1010"
num.toString(16)  // Hexadecimal  "0xA"
num.toString(8)   // Octal        "0o12"
num.toString(36)  // Base 36      "A"

/*** Modulo % ***/
// Check if a number is even or odd
function isEven(number) {
    return number % 2 === 0;
}
  // Find the sum of all even numbers within a range
  function sumEvenNumbersInRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      if (isEven(i)) {
        sum += i;
      }
    }
    return sum;
  }
  // Calculate the factorial of a number
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  // Check if a number is prime
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  // Generate the Fibonacci sequence
  function generateFibonacci(n) {
    const fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
      fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }
    return fibSequence;
  }

/*** XOR ^ ***/
// XOR as a mathematical operation to compare binary numbers:
a ^ b
/* XOR has several practical applications in programming, including bitwise operations, cryptography, and even solving coding interview problems. One common usage is swapping values without using a temporary variable: */
let x = 5;
let y = 7;
x = x ^ y;
y = x ^ y;
x = x ^ y;
