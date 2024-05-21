/* The repl module in Node.js provides a way to run a Read-Eval-Print Loop, commonly used for debugging and interacting with Node.js interactively. */

import { start } from "node:repl";

// Starting a simple REPL session
// This will start an interactive REPL session where you can type JavaScript code.
// You'd typically run this in a standalone script or directly via the Node.js command line.
start();

// Setting REPL prompt, and initial message
start({
	prompt: "My Custom REPL > ",
	welcome: "Welcome to my custom REPL!",
});

// Example 3: Specifying input and output streams
const inputStream = process.stdin;
const outputStream = process.stdout;
start({
	input: inputStream,
	output: outputStream,
});

// Example 4: Evaluating input before execution
start({
	eval: (cmd, context, filename, callback) => {
		// You can modify cmd or handle it before it's actually executed
		let result = null;
		try {
			result = eval(cmd); // Careful with using eval
		} catch (error) {
			callback(error);
		} finally {
			callback(null, result);
		}
	},
});

// Customizing the writer function
start({
	writer: (output) => {
		// This will be used to format the output
		if (typeof output === "string") {
			return `String: ${output}`;
		}
		return output.toString();
	},
});

// Example 6: Storing and retrieving context
const r = start();
r.context.myVariable = "This is stored in REPL context";

// Note: Most repl.start() options and functionality are best experienced interactively.
// To see the full effects of each example, it's recommended to run each one in its own script or Node.js session.
