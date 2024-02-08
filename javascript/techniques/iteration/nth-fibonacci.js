//? ITERATIVE TECHNIQUES

/* Basic programming constructs, loops, and iteration.

Problem: Calculate the n-th Fibonacci number using an iterative approach.

Skills: This introduces students to iterative solutions for problems traditionally solved via recursion, emphasizing the use of loops and memory efficiency. */

const fibonacciIterative = (num) => {
    // iterative
    let a = 0;
    let b = 1;
    for (let i = 0; i < num; i++) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return b;
}; // O(n) time, O(1) space/memory