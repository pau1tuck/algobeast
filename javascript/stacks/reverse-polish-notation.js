/* Evaluate the value of an arithmetic expression in Reverse Polish Notation (RPN).
Reverse Polish Notation (RPN) is a mathematical notation in which every operator follows all of its operands.
It is also known as postfix notation.
Example
    - Infix Notation: (3 + 4) * 5
    - Reverse Polish Notation: 3 4 + 5 *
*/

function rpn(tokens) {
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            const b = stack.pop();
            const a = stack.pop();

            switch (token) {
                case "+":
                    stack.push(a + b);
                    break;
                case "-":
                    stack.push(a - b);
                    break;
                case "*":
                    stack.push(a * b);
                    break;
                case "/":
                    stack.push(Math.trunc(a / b)); // Use trunc to handle division towards zero
                    break;
            }
        }
    }
    return stack.pop();
}

// Example usage
console.log(rpn(["2", "1", "+", "3", "*"])); // Output: 9
console.log(rpn(["4", "13", "5", "/", "+"])); // Output: 6
