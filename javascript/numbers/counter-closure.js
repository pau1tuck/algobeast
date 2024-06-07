// Create a counter function with a private state, which has `increment` and `getValue` functionality.
const privateCounter = () => {
    _count = 0; // Private field
    return {
        increment: (val = 1) => {
            _count += val;  // Increment the private count variable.
        },
        getValue: () => {
            return _count;  // Return the current value of the private count variable.
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

The key point is that the count variable is not accessible directly from outside the privateCounter function. It's encapsulated within the closure, and the inner functions keep a reference to it, allowing them to read and modify it even after the outer function has finished executing.

This approach effectively simulates private variables using function scope. */