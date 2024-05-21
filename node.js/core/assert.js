import { strictEqual, deepStrictEqual, throws, ok } from "assert";

// Example 1: Basic Assertion
strictEqual(2 + 2, 4, "2 + 2 should equal 4");

// Example 2: Deep Equality
deepStrictEqual([1, 2, 3], [1, 2, 3], "Arrays should be deeply equal");

// Example 3: Testing Exceptions
throws(
	() => {
		throw new Error("This is an error");
	},
	Error,
	"An error should be thrown",
);

// Example 4: Custom Error Message
strictEqual(5 % 2, 0, new Error("5 % 2 should be 1"));

// Example 5: Check for Truthiness
ok(5 > 3, "5 should be greater than 3");

// Example 6: Check for Falsiness
strictEqual(false, 0, "False should be equal to 0");

// Example 7: Custom Equality Function
function areStringsEqual(str1, str2) {
	return str1.toUpperCase() === str2.toUpperCase();
}
strictEqual("hello", "Hello", "Strings should be equal with case-insensitivity", areStringsEqual);

// Example 8: Check if Value is Undefined
strictEqual(undefined, undefined, "Value should be undefined");
