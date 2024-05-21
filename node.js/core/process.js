const process = require("process"); // Though not strictly required, since process is a global object in Node.js

process.stdin.on("data", data => {
    process.stdout.write(`You typed: ${data}`);
});
process.stdout.write("This is a message to the standard output.\n");

process.stderr.write(
    "This is an error message to the standard error.\n",
);

process.nextTick(() => {
    // Do something
}); // Ensures the callback runs before any I/O events are fired in the next tick of the event loop.

process.on("exit", code => {
    console.log(`Exiting with code: ${code}`);
}); // Registers an event listener for the 'exit' event.
process.on("uncaughtException", err => {
    console.error("There was an uncaught error", err);
    process.exit(0); // Recommended to exit after an uncaughtException
}); // Registers an event listener for the 'uncaughtException' event.

// Do some work
if (errorOccurred) {
    process.exitCode = 1; // Something went wrong
}

process.argv; // Returns an array containing the command line arguments.
process.cwd(); // Returns the current working directory of the process.
process.chdir("/tmp"); // Changes the current working directory.
process.env; // Returns an object containing the user environment.
process.exitCode = 1; // Sets the exit code for when process exits gracefully.
process.pid; // Returns the process ID.
process.platform; // Returns the operating system platform.
process.version; // Returns the Node.js version string.
process.versions; // Returns an object listing the version strings of Node.js and its dependencies.
process.uptime(); // Returns the number of seconds the current Node.js process has been running.
process.memoryUsage(); // Returns an object describing the memory usage of the Node.js process.
process.exit(1); // Terminates the process with the given code. Avoid in favor of setting exitCode.
