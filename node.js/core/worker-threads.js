const {
    Worker,
    isMainThread,
    parentPort,
    workerData,
} = require("worker_threads");

// Example 1: Main Thread
if (isMainThread) {
    console.log("This is the main thread.");

    // Create a new worker thread
    const worker = new Worker(__filename, {
        workerData: "Hello from main thread!",
    });

    // Receive messages from the worker
    worker.on("message", message => {
        console.log("Main thread received:", message);
    });

    // Send a message to the worker
    worker.postMessage("Hello from main thread!");
}

// Example 2: Worker Thread
if (!isMainThread) {
    console.log("This is a worker thread.");

    // Receive messages from the main thread
    parentPort.on("message", message => {
        console.log("Worker received:", message);
    });

    // Send a message back to the main thread
    parentPort.postMessage("Hello from worker thread!");

    // Access the workerData passed during creation
    console.log("Worker data:", workerData);
}
