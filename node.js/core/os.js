import os from "os";
const os = require("os");

os.arch(); // Get the CPU architecture.
os.cpus(); // Get information about each CPU core.
os.totalmem(); // Get the total amount of system memory in bytes.
os.freemem(); // Get the amount of free system memory in bytes.
// 10. Get the home directory of the current user
const homeDir = os.homedir();
os.hostname(); // Get the hostname of the operating system.
// 14. Get the number of seconds the system has been running since it was last booted (same as uptime)
const loadavg = os.loadavg();
// 13. Get the network interfaces that are currently active
const networkInterfaces = os.networkInterfaces();
console.log(
    `Network Interfaces: ${JSON.stringify(networkInterfaces)}`,
);
os.platform(); // Get the operating system platform.
os.release(); // Get the release version of the operating system.
// 1. Get the system's default directory for temp files
const tmpDir = os.tmpdir();
os.type(); // Get the operating system type (e.g., "Linux" or "Windows").
os.uptime(); // Get the system uptime in seconds.
os.networkInterfaces(); // Get information about network interfaces.
os.userInfo(); // Get information about the current user.

JSON.stringify(os.EOL); // Get the end-of-line character(s) for the current operating system.