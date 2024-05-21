import { promisify, format, inspect, types, callbackify, debuglog, inherits, deprecate, isDeepStrictEqual, TextEncoder, TextDecoder, getSystemErrorName } from "node:util";

// Convert a function that uses callbacks into a function returning a promise.
const promisifyFunction = promisify((arg, callback) => {
    // Typically some async action here
    callback(null, `Result for ${arg}`);
});
promisifyFunction("test").then(console.log);

format("%s:%s", "foo", "bar", "baz"); // 'foo:bar baz' - Format a string.

inspect({ a: 1, b: { c: 2 } }); // Inspects and returns a string representation of an object.

types.isBigInt(123n); // Check if value is a BigInt.

types.isBooleanObject(new Boolean()); // Check if value is a Boolean object.

types.isDate(new Date()); // Check if value is a Date object.

types.isRegExp(/abc/); // Check if value is a RegExp object.

callbackify(async () => "hello world"); // Takes an async function and returns a function following the error-first callback style.

debuglog("section"); // Used to create a function that conditionally writes debug messages to stderr based on the value of the `NODE_DEBUG` environment variable.

inherits(Derived, Base); // Deprecated. It used to allow an object to inherit the prototype methods from another object.

deprecate(() => {
    // Functionality here
}, "This function is deprecated!")(); // Marks a method as deprecated.

isDeepStrictEqual({ a: 1 }, { a: 1 }); // Check if two values are deep strictly equal.

promisify.custom = Symbol("util.promisify.custom"); // Symbol used to define custom promisify implementations.

const sleep = promisify(setTimeout); // Uses the built-in setTimeout to create a promise-based "sleep" function.

// Example usage of util.TextDecoder & util.TextEncoder, which are API-compatible with the TextEncoder and TextDecoder built into modern browsers.
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const encoded = encoder.encode("Hello World");
const decoded = decoder.decode(encoded);

console.log(decoded); // Outputs: 'Hello World'

getSystemErrorName(-2); // Returns the string description for the provided system error number (e.g., 'ENOENT').

// Experimental API to work with WHATWG URL Objects.
const URL = types.isURL;
const myURL = new URL("https://example.com/");
console.log(types.isURL(myURL)); // true
