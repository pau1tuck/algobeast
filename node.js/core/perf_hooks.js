import { performance, PerformanceObserver } from 'node:perf_hooks';

/*
The `perf_hooks` module provides tools to measure the performance of various parts of a Node.js
application. This can help in identifying bottlenecks, understanding performance behaviors,
and tuning applications for better performance.
*/

// The performance object is similar to the browser's `window.performance`.
// It provides access to performance-related information.

const start = performance.now();  // Captures a high-resolution timestamp

// Example: Measure the time taken for a synchronous operation
const sum = Array.from({ length: 1e6 }, (_, i) => i).reduce((a, b) => a + b);
const end = performance.now();

console.log(`Operation took ${end - start} milliseconds`);

// PerformanceObserver allows you to observe various performance-related events.

const obs = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(entry);
  }
});

// Start observing specific entry types
obs.observe({ entryTypes: ['function'] });

// Now, any function wrapped with `performance.timerify()` will be observed.
const timerifiedFunction = performance.timerify(() => {
  let sum = 0;
  for (let i = 0; i < 1e6; i++) {
    sum += i;
  }
  return sum;
});

timerifiedFunction();

// Note: `perf_hooks` is a powerful module for fine-grained performance analysis, especially
// when combined with other debugging and profiling tools available in Node.js.
