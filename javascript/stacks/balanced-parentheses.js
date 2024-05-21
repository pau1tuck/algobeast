/* Description: Given a string containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid. */
function isBalanced(s) {
    const stack = [];
    // Object to map closing brackets to their corresponding opening brackets
    const bracketMap = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    for (const char of s) {
        // If the character is an opening bracket, push it onto the stack
        if (Object.values(bracketMap).includes(char)) {
            stack.push(char);
        } else if (bracketMap[char]) {
            // Check if the top of the stack matches the corresponding opening bracket
            if (stack.pop() !== bracketMap[char]) {
                return false;
            }
        }
    }
    // If the stack is empty, all open brackets were correctly closed.
    return stack.length === 0;
}
