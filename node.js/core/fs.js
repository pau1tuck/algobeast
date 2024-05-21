const fs = require("fs").promises; // import { promises as fs } from 'fs';
const path = require("path");

const filepath = path.join(process.cwd(), "hello.txt"); // or: const filepath = path.join("../..", "hello.txt");

// readFile PROMISE with ASYNC-AWAIT
const run = async () => {
    try {
        const contents = await fs.readFile(filepath, "utf8");
        console.log("File contents (async):", contents);
    } catch (err) {
        console.log(err);
    }
};

// PROMISE
fs.readFile(filepath, "utf8")
    .then(contents => {
        console.log("File contents (promise):", contents);
    })
    .catch(err => {
        console.log(err);
    });

// CALLBACK (Legacy)
fs.readFile(filepath, "utf8", (err, contents) => {
    if (err) {
        return console.log(err);
    }
    console.log("File contents (callback):", contents);

    // Writing the file with contents in uppercase
    fs.writeFile(filepath, contents.toUpperCase(), err => {
        if (err) throw err;
        console.log(
            "File written successfully with uppercase contents.",
        );
    });

    // Appending contents to a log file
    const logFilePath = path.join(process.cwd(), "log.txt");
    fs.appendFile(
        logFilePath,
        `${JSON.stringify(contents)}\n`,
        "utf-8",
        error => {
            if (error) {
                console.error("Failed to write to log file:", error);
            }
        },
    );
});

// SYNCHRONOUS
try {
    const filedata = fs.readFileSync(filepath, "utf8");
    console.log("File contents (synchronous):", filedata);

    const newFileData = "Hello, Node.js!";
    fs.writeFileSync(filepath, newFileData);
    console.log("File written successfully with new contents.");
} catch (err) {
    console.log(err);
}

// CHECK FILE EXISTS
// Method 1
if (fs.existsSync(filepath)) {
    console.log("File exists (method 1)");
}

// Method 2
fs.access(filepath, fs.constants.F_OK, err => {
    if (err) {
        console.log("File does not exist (method 2)");
    } else {
        console.log("File exists (method 2)");
    }
});

// Changing file permissions (chmod)
try {
    fs.chmod(filepath, 0o644);
    console.log("File permissions changed successfully.");
} catch (err) {
    console.log(err);
}

// Get file stats
fs.stat(filepath)
    .then(stats => {
        console.log("File stats:", stats);
    })
    .catch(err => {
        console.log(err);
    });

// Get symbolic link stats
const fileLinkPath = path.join(process.cwd(), "filelink.txt");
fs.lstat(fileLinkPath)
    .then(stats => {
        console.log("Symbolic link stats:", stats);
    })
    .catch(err => {
        console.log(err);
    });

// Watch for file changes
fs.watchFile(filepath, (current, previous) => {
    console.log(`File updated at ${current.mtime}`);
});

// Watch for directory changes
fs.watch(process.cwd(), (eventType, filename) => {
    console.log(`Event type: ${eventType}, filename: ${filename}`);
});

// 1. Synchronous file read
const data = fs.readFileSync("example.txt", "utf8");

// 2. Asynchronous file read
fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

// 3. Synchronous file write
fs.writeFileSync("example.txt", "Hello, World!");

// 4. Asynchronous file write
fs.writeFile("example.txt", "Hello, World!", err => {
    if (err) throw err;
    console.log("File has been saved!");
});

// 5. Check if a file exists
fs.access("example.txt", fs.constants.F_OK, err => {
    console.log(err ? "File does not exist" : "File exists");
});

// 6. Create a directory (if it doesn't exist)
fs.mkdir("new_directory", { recursive: true }, err => {
    if (err) throw err;
});

// 7. Read the contents of a directory
fs.readdir(".", (err, files) => {
    if (err) throw err;
    console.log(files);
});

// 8. Rename a file
fs.rename("oldname.txt", "newname.txt", err => {
    if (err) throw err;
});

// 9. Delete a file
fs.unlink("example.txt", err => {
    if (err) throw err;
    console.log("File deleted!");
});

// 10. Watch for changes on a file or directory
const watcher = fs.watch(
    ".",
    { encoding: "utf8" },
    (eventType, filename) => {
        if (filename) {
            console.log(filename + " changed!");
        }
    },
);
watcher.close(); // Stop watching

// 11. Create a Readable stream
const readStream = fs.createReadStream("example.txt");

readStream.on("data", chunk => {
    console.log(chunk.toString());
});

// 12. Create a Writeable stream
const writeStream = fs.createWriteStream("output.txt");
writeStream.write("Hello, World!\n");
writeStream.end();

// 13. Linking (creating hard links)
fs.link("source.txt", "newlink.txt", err => {
    if (err) throw err;
});

// 14. Symbolic links (symlinks)
fs.symlink("source.txt", "symlink.txt", err => {
    if (err) throw err;
});
