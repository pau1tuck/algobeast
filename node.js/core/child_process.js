import { spawn, exec, fork, execFile, spawnSync, execSync } from "node:child_process";

// Spawn a shell then execute the command within that shell
const ls = spawn("ls", ["-lh", "/usr"]);
ls.stdout.on("data", (data) => {
  console.log(`Output:\n${data}`);
});
ls.stderr.on("data", (data) => {
  console.error(`Error:\n${data}`);
});
ls.on("close", (code) => {
  console.log(`Child process exited with code ${code}`);
});

// Uses shell to execute the command, buffer the entire output, then send it all at once (callback-based)
exec("cat *.js bad_file | wc -l", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`Output:\n${stdout}`);
  console.error(`Errors:\n${stderr}`);
});

// Uses fork to spawn a Node.js child process which executes the provided module, establishing an IPC (Inter-Process Communication) channel for sending messages between parent and child.
const child = fork("./path_to_script.js");
child.on("message", (msg) => {
  console.log("Message from child", msg);
});
child.send({ hello: "world" });

// Similar to exec but intended for use with executable files
execFile("file.bat", (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});

// Synchronously spawns a shell and buffers the command's generated output
const { stdout, stderr } = spawnSync("ls");
console.log(`stdout: ${stdout}`);
console.error(`stderr: ${stderr}`);

// Synchronously runs a command in a shell and buffers the output (returns entire output once done)
const code = execSync("echo Hello world!");
console.log(`Output: ${code}`);

