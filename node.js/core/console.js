// The console module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
const console = require("console");
// Example 1: Basic logging
console.log("This is a log message.");
// Example 11: Clearing the console - On some platforms like browsers, this will clear the console
console.clear();
// Example 2: Info logging
console.info("This is an info message.");
// Example 3: Warning logging
console.warn("This is a warning message.");
// Example 4: Error logging
console.error("This is an error message.");
// Example 5: Table view for arrays or objects
const arr = [
	{ a: 1, b: 2 },
	{ a: 3, b: 4 },
];
console.table(arr);
// Example 8: Asserting - logs an error message if the assertion fails
console.assert(5 > 3, "5 is not greater than 3"); // Does not log anything since the condition is true
console.assert(3 > 5, "3 is not greater than 5"); // Logs "Assertion failed: 3 is not greater than 5"
// Example 6: Count occurrences
for (let i = 0; i < 5; i++) {
	console.count("Loop counter");
}
// Example 10: Grouping logs - Creates a new inline group, indenting all following output by another level
console.group("Group 1");
console.groupEnd("Group 1");
console.log("This is inside Group 1");
console.log("This is outside any group");
// Example 7: Start and end a timer to measure durations
console.time("Array initialization");
let array = new Array(1000000).fill().map(Math.random);
console.timeEnd("Array initialization");
// Example 9: Trace - Displaying a stack trace
console.trace("Here is a stack trace:");
