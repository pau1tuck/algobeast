/* The primary purpose of the cluster module is to enable load balancing over multi-core systems. Node.js runs in a single-threaded mode, but it can be potentially wasteful on multi-core systems. The cluster module allows you to create child processes (often one for each CPU core) to handle incoming requests, which can greatly improve the performance and reliability of your Node.js applications.

Each child process (or worker) runs in its own execution thread and has its own memory space. All workers use the same server port and share the load. The master process manages the workers and handles the distribution of incoming requests to ensure a balanced load across all workers.

This approach lets Node.js applications take full advantage of multi-core systems, improving their throughput and fault-tolerance. */

import { cluster } from "node:cluster";

// Check if the current process is the master
if (cluster.isMaster) {

  // Shows the scheduling policy: either cluster.SCHED_RR or cluster.SCHED_NONE
  console.log(cluster.schedulingPolicy);

  // Shows the active settings for the cluster
  console.log(cluster.settings);

  // An object containing all active worker processes
  console.log(cluster.workers);

  // Set up custom settings for fork behavior
  cluster.setupMaster({
    exec: 'worker.js',   // The script file to run in the worker processes
    args: ['--use', 'https'],  // Arguments passed to the worker script
    silent: false   // Whether or not to send output to the parent's stdio
  });

  // Spawn a new worker process
  const worker = cluster.fork();

  // Disconnect the master from all workers, but allows workers to finish current tasks
  cluster.disconnect(() => {
    console.log('All workers disconnected');
  });

  // Event emitted when a worker is forked
  cluster.on('fork', (worker) => {
    console.log(`Worker ${worker.id} forked`);
  });

  // Event emitted when a worker is online and ready to start receiving messages
  cluster.on('online', (worker) => {
    console.log(`Worker ${worker.id} is online`);
  });

  // Event emitted when a worker starts listening for connections (i.e., starts a server)
  cluster.on('listening', (worker, address) => {
    console.log(`Worker ${worker.id} is listening on ${address.address}:${address.port}`);
  });

  // Event emitted when the IPC channel between master and worker is disconnected
  cluster.on('disconnect', (worker) => {
    console.log(`Worker ${worker.id} has disconnected`);
  });

  // Event emitted when any worker uses the process.send() method
  cluster.on('message', (worker, message, handle) => {
    console.log(`Message from worker ${worker.id}: ${message}`);
  });

  // Event emitted after cluster.setupMaster() is called, indicating changes in the setup
  cluster.on('setup', (settings) => {
    console.log(`Setup event with settings: ${JSON.stringify(settings)}`);
  });

} else if (cluster.isWorker) {

  // Log the worker ID (useful for debugging or tracking)
  console.log(`I am worker #${cluster.worker.id}`);

  // Send a message from the worker to the master process
  process.send(`Hello from worker #${cluster.worker.id}`);
}
