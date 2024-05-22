class QueueWithTwoStacks {
    constructor() {
        this.inStack = [];  // Stack to push incoming elements
        this.outStack = []; // Stack to pop elements for dequeue
    }
    enqueue(element) {
        this.inStack.push(element);
    }
    dequeue() {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack.pop();
    }
    front() {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack[this.outStack.length - 1];
    }
}
// Process queries
function processQueries(queries) {
    const queue = new QueueWithTwoStacks();
    const results = [];

    queries.forEach(query => {
        const type = query[0];
        switch (type) {
            case 1: // Enqueue
                queue.enqueue(query[1]);
                break;
            case 2: // Dequeue
                queue.dequeue();
                break;
            case 3: // Print the front element
                results.push(queue.front());
                break;
        }
    });
    return results;
}

// Example usage
const queries = [
    [1, 42], [2], [1, 14], [3], [1, 28], [3], [1, 60], [1, 78], [2], [2]
];
console.log(processQueries(queries)); // Outputs: [14, 14]
