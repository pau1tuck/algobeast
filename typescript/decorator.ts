// Define the decorator
function IsPalindrome(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
) {
    // Save a reference to the original method (this is the method being decorated)
    const originalMethod = descriptor.value;

    // Redefine the method's implementation
    descriptor.value = function (...args: any[]) {
        // Get the first argument passed to the method (in our case, the string to check)
        const inputString = args[0];

        // Check if the string is a palindrome
        const isPalindrome =
            inputString === inputString.split("").reverse().join("");

        // Return the result based on the palindrome check
        if (isPalindrome) {
            return `${inputString} is a palindrome!`;
        } else {
            return `${inputString} is not a palindrome.`;
        }
    };
    // Return the new descriptor (with our new method implementation)
    return descriptor;
}
class PalindromeChecker {
    // Apply the decorator to the check method
    @IsPalindrome
    check(input: string): string {
        // This body is now empty, but if you had additional logic or checks, they could go here.
        return ""; // This line is to satisfy TypeScript's type checks, but won't be reached due to the decorator.
    }
}

const checker = new PalindromeChecker();
console.log(checker.check("radar")); // Outputs: radar is a palindrome!
console.log(checker.check("hello")); // Outputs: hello is not a palindrome.
