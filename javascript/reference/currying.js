function add(a, b, c) {
    return a + b + c;
}
// Curried version of the add function
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
// Using the curried function
const add1 = curriedAdd(1);
const add1And2 = add1(2);
const result = add1And2(3); // Returns 6
console.log(result); // Outputs: 6

// Another way to use it all at once
console.log(curriedAdd(1)(2)(3)); // Outputs: 6

/* This technique is especially useful in situations where you might not have all arguments available at once, or when you want to create a sequence of function calls based on received parameters. It's also a great way to demonstrate functional programming techniques during a JavaScript technical interview. */