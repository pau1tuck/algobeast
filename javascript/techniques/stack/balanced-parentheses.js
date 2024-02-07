//? STACK

/* This data structure is fundamental to understanding LIFO (Last In, First Out) concepts.

Problem: Balanced Parentheses

Description: Given a string containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid. An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

Example:

- Input: "()", Output: true
- Input: "()[]{}", Output: true
- Input: "(]", Output: false
- Input: "([)]", Output: false
- Input: "{[]}", Output: true

Rationale: This problem requires the developer to push open brackets onto the stack as they appear in the string, and pop them off when a matching close bracket is encountered, checking for proper nesting and pairing. It's an excellent demonstration of how stacks can be used to keep track of a series of elements in a specific order and how to apply the LIFO principle to solve problems involving nested or sequential structures, such as in parsing and compiler functionality. */

function isBalanced(s) {
	// Stack to keep track of opening brackets
	const stack = [];

	// Object to map closing brackets to their corresponding opening brackets
	const bracketMap = {
		")": "(",
		"}": "{",
		"]": "[",
	};

	// Iterate through each character in the string
	for (const char of s) {
		// If the character is an opening bracket, push it onto the stack
		if (Object.values(bracketMap).includes(char)) {
			stack.push(char);
		} else if (bracketMap[char]) {
			// Check if the top of the stack matches the corresponding opening bracket
			if (stack.pop() !== bracketMap[char]) {
				// If not, the string is not balanced
				return false;
			}
		}
	}
	// If the stack is empty, all open brackets were correctly closed.
	return stack.length === 0;
}
