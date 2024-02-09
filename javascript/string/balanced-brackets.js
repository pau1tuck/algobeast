/*  Determine if a given string containing parentheses, curly braces, and square brackets is valid (balanced) */

function areValidParentheses(s) {
	const stack = [];
	const bracketsMap = {
		"(": ")",
		"[": "]",
		"{": "}",
	};
	for (const char of s) {
		if (bracketsMap[char]) {
			stack.push(char); // Push opening brackets onto the stack
		} else {
			const top = stack.pop();
			if (bracketsMap[top] !== char) {
				return false; // Mismatched closing bracket
			}
		}
	}
	return stack.length === 0; // If stack is empty, brackets are balanced
}

/* ---------------------------------- */
// Example valid parentheses
const validString = "{[()]}";

// Check if the string has valid parentheses
const isValid = areValidParentheses(validString);

// Output the result
console.log("Is valid parentheses:", isValid);
