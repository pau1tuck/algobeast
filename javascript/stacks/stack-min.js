/* Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. */

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    // Push element x onto the stack
    push(x) {
        this.stack.push(x);
        // Push onto minStack if it's the new minimum
        if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(x);
        }
    }
    // Remove the element on top of the stack
    pop() {
        const poppedValue = this.stack.pop();
        // Pop from minStack if it matches the popped value
        if (poppedValue === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }
    // Get the top element
    top() {
        return this.stack[this.stack.length - 1];
    }
    // Retrieve the minimum element in the stack
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
} // Time: O(1), Space: O(n)
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Output: -3
minStack.pop();
console.log(minStack.top()); // Output: 0
console.log(minStack.getMin()); // Output: -2
