/* Similar to stacks, but FIFO (First In, First Out), queue is another fundamental data structure.

Problem: Implement a Queue using Stacks

Description: Design a queue class that implements the queue operations using only stack operations. The queue class should support the following operations:

- enqueue(x): Adds an element x to the end of the queue.
- dequeue(): Removes the element from the front of the queue and returns it.
- peek(): Returns the element at the front of the queue without removing it.
- empty(): Returns true if the queue is empty, false otherwise. */

class MyQueue {
    constructor() {
        this.enqueueStack = []; // Stack to handle enqueue operations
        this.dequeueStack = []; // Stack to handle dequeue operations
    }
    // Adds an element to the end of the queue
    enqueue(x) {
        this.enqueueStack.push(x);
    }
    // Removes the element from the front of the queue and returns it
    dequeue() {
        if (this.dequeueStack.length === 0) {
            // Move all elements from enqueueStack to dequeueStack, reversing their order
            while (this.enqueueStack.length !== 0) {
                this.dequeueStack.push(this.enqueueStack.pop());
            }
        }
        return this.dequeueStack.pop(); // Remove the element from the front of the queue
    }
    // Returns the element at the front of the queue without removing it
    peek() {
        if (this.dequeueStack.length === 0) {
            // Move elements to dequeueStack if it's empty to get the front element
            while (this.enqueueStack.length !== 0) {
                this.dequeueStack.push(this.enqueueStack.pop());
            }
        }
        return this.dequeueStack[this.dequeueStack.length - 1]; // Return the front element
    }
    // Returns true if the queue is empty, false otherwise
    empty() {
        return this.enqueueStack.length === 0 && this.dequeueStack.length === 0;
    }
}
