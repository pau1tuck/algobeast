// Create a counter function with a private state, which has increment and getValue functionality.
const privateCounter = () => {
    let count = 0;  // This is a private variable.
    return {
        increment: (val = 1) => {
            count += val;  // Increment the private count variable.
        },
        getValue: () => {
            return count;  // Return the current value of the private count variable.
        },
    };
};
// Usage example:
const counter = privateCounter();
counter.increment(); // count is now 1
console.log(counter.getValue()); // Outputs: 1
counter.increment(5); // count is now 6 (counter maintains state)
console.log(counter.getValue()); // Outputs: 6

/* A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables. This includes:
- Variables of its own scope.
- Variables of the outer function’s scope.
- Global variables.

The inner functions (increment and getValue) maintain access to the count variable even after the outer function (privateCounter) has executed.

The typical "closure question" in technical interviews is to create a function that maintains a private state. Here’s how it works:
- Outer Function: privateCounter creates a private variable count.
- Inner Functions: The increment and getValue functions have access to count even after the privateCounter function has finished execution. */