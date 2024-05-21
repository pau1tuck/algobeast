import { setTimeout, setInterval, setImmediate, clearTimeout, clearInterval, clearImmediate } from 'node:timers';

/*
The `timers` module provides various timing functionalities for executing code after a
specified delay, at regular intervals, or as soon as possible. It provides core timing
utilities that are foundational in both client-side and server-side JavaScript.
*/

// setTimeout: Executes a one-time callback after delay milliseconds.
const timeoutId = setTimeout(() => {
    console.log('This will run after 2 seconds.');
}, 2000);

// clearTimeout: Prevents a timeout from triggering.
clearTimeout(timeoutId);  // Comment out this line to see the setTimeout callback in action.

// setInterval: Executes a callback function repeatedly, with a fixed time delay between each call to that function.
const intervalId = setInterval(() => {
    console.log('This will run every 3 seconds.');
}, 3000);

// Using setTimeout to clear an interval after a specific period
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval cleared.');
}, 10000);  // Clear the interval after 10 seconds

// setImmediate: Executes a callback function immediately on the next iteration of the event loop.
setImmediate(() => {
    console.log('Run this immediately on the next iteration of the event loop.');
});

// clearImmediate: Prevents an immediate timer from executing.
const immediateId = setImmediate(() => {
    console.log('This should not run.');
});
clearImmediate(immediateId);  // Comment out this line to see the setImmediate callback in action.

// Note: The 'timers' module also provides additional functionality like `unref` and `ref` methods
// on timer objects to control their behavior in the event loop. This block offers a basic overview
// of the primary timer functions.
