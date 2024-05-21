import fs from "fs";
import path from "path";

// 1. Write to a file after a delay
setTimeout(() => {
    const filePath = path.join(__dirname, "sample.txt");
    fs.writeFileSync(filePath, "This is some sample text.");
    console.log("Written to the file after a 3-second delay.");
}, 3000);

// 2. Read from the file every 5 seconds
const interval = setInterval(() => {
    const filePath = path.join(__dirname, "sample.txt");
    const content = fs.readFileSync(filePath, "utf8");
    console.log(`Read from the file: ${content}`);
}, 5000);

// 3. Clear the above interval after 20 seconds
setTimeout(() => {
    clearInterval(interval);
    console.log("Stopped reading from the file every 5 seconds.");
}, 20000);

// 4. Demonstrating process.nextTick()
process.nextTick(() => {
    console.log(
        "This is printed immediately after synchronous tasks but before any other asynchronous tasks.",
    );
});

// 5. Demonstrating setImmediate()
setImmediate(() => {
    console.log(
        "This is printed immediately after any nextTick callbacks and before any setTimeout or setInterval callbacks.",
    );
});

console.log("Started the read-write example application.");
