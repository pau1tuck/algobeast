const os = require("os");

os.arch(); // Get the CPU architecture.

os.cpus(); // Get information about each CPU core.

os.totalmem(); // Get the total amount of system memory in bytes.

os.freemem(); // Get the amount of free system memory in bytes.

os.hostname(); // Get the hostname of the operating system.

os.platform(); // Get the operating system platform.

os.release(); // Get the release version of the operating system.

os.type(); // Get the operating system type (e.g., "Linux" or "Windows").

os.uptime(); // Get the system uptime in seconds.

os.networkInterfaces(); // Get information about network interfaces.

os.userInfo(); // Get information about the current user.

JSON.stringify(os.EOL); // Get the end-of-line character(s) for the current operating system.

import os from "os";

// 1. Get the system's default directory for temp files
const tmpDir = os.tmpdir();
console.log(`Temporary directory: ${tmpDir}`);

// 2. Get the hostname of the operating system
const hostname = os.hostname();
console.log(`Hostname: ${hostname}`);

// 3. Get the type of the operating system
const osType = os.type();
console.log(`OS Type: ${osType}`);

// 4. Get platform type (e.g., 'darwin', 'win32')
const platform = os.platform();
console.log(`Platform: ${platform}`);

// 5. Get the operating system's release
const osRelease = os.release();
console.log(`OS Release: ${osRelease}`);

// 6. Get the system's architecture (e.g., 'x64', 'arm64')
const arch = os.arch();
console.log(`Architecture: ${arch}`);

// 7. Get the total system memory
const totalMem = os.totalmem();
console.log(`Total Memory: ${totalMem} bytes`);

// 8. Get the free system memory
const freeMem = os.freemem();
console.log(`Free Memory: ${freeMem} bytes`);

// 9. Get an array of CPUs/core info
const cpus = os.cpus();
console.log(`Number of CPUs: ${cpus.length}`);
console.log(`First CPU Model: ${cpus[0].model}`);

// 10. Get the home directory of the current user
const homeDir = os.homedir();
console.log(`Home Directory: ${homeDir}`);

// 11. Get the OS uptime (in seconds)
const uptime = os.uptime();
console.log(`Uptime: ${uptime} seconds`);

// 12. Get the current user's information
const userInfo = os.userInfo();
console.log(
    `User Info: ${userInfo.username}, ${userInfo.uid}, ${userInfo.homedir}`,
);

// 13. Get the network interfaces that are currently active
const networkInterfaces = os.networkInterfaces();
console.log(
    `Network Interfaces: ${JSON.stringify(networkInterfaces)}`,
);

// 14. Get the number of seconds the system has been running since it was last booted (same as uptime)
const loadavg = os.loadavg();
console.log(`Load Averages (1, 5, and 15 minutes): ${loadavg}`);
