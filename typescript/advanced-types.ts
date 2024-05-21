/* In TypeScript, the `any`, `unknown`, and `never` types serve distinct purposes, enabling different levels of type safety and handling various scenarios in type checking. Let's explore each with explanations and code examples to clearly differentiate them.

The `any` type is the most permissive type in TypeScript. It allows you to bypass TypeScript's static type checking. Using any means that you can assign any value to a variable and call any methods on it without any compilation errors, effectively opting out of type checking. This is useful when you're migrating JavaScript code to TypeScript or interacting with dynamic content whose type is not known at development time. */

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// You can call any method without TypeScript throwing errors
notSure.toFixed(); // No compile-time error, but will runtime error if notSure is not a number
notSure.split(','); // No compile-time error, works fine if notSure is a string

/* The unknown type represents any value but is safer than any because it doesn't allow you to perform arbitrary operations on values of this type without an explicit type assertion or type checking. It's a type-safe counterpart of any. When you use unknown, you need to perform some form of checking before performing most operations on values of this type, which helps catch errors during development.*/

let uncertain: unknown = 30;
uncertain = "could be a string";
uncertain = true; // still ok, can be any type

// Compile-time checks prevent operations on 'unknown' variables without narrowing the type
if (typeof uncertain === 'string') {
    console.log(uncertain.split(',')); // Okay, we know this is a string now
}
// This will raise a TypeScript error:
// uncertain.toFixed(); // Object is of type 'unknown'.

/* The never type represents the type of values that never occur. For example, it is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns. Functions that have a never return type can be assigned to any other type. This is useful for functions that are intended to not return to the calling code, typically used in error handling or infinite loops. */

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}
function infiniteLoop(): never {
    while (true) {
    }
}
// This function doesn't explicitly return a value or continue execution
function fail(): never {
    return error("Something failed");
}
// Trying to use a never type in a reachable code will cause a compile-time error
let impossible: never = error("Won't happen"); // This line will compile, but the value of impossible can never be used

/* Summary:
- `any` allows any operations on its values without type checks, leading to potential runtime errors but offering maximum flexibility.
- `unknown` forces developers to perform type checking before operations, providing safety and still allowing for dynamic content handling.
- `never` is useful for function return types where the function does not return control to the calling code either by throwing an error or by running indefinitely. */