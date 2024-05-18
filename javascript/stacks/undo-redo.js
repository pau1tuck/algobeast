class undoneStack {
    constructor() {
        this.currentStack = [];
        this.undoneStack = [];
    }
    // Perform an action and save state
    performAction(state) {
        this.currentStack.push(state);
        // Clear the undo stack because we can no longer redo after a new action
        this.undoneStack = [];
    }
    undo() {
        if (this.currentStack.length > 0) {
            const state = this.currentStack.pop();
            this.undoneStack.push(state);
            return state;
        }
        return null; // No state to undo
    }
    redo() {
        if (this.undoneStack.length > 0) {
            const state = this.undoneStack.pop();
            this.currentStack.push(state);
            return state;
        }
        return null; // No state to redo
    }
    getCurrentState() {
        if (this.currentStack.length > 0) {
            return this.currentStack[this.currentStack.length - 1];
        }
        return null; // No current state
    }
}
const undoneStack = new undoneStack();
undoneStack.performAction("State1");
undoneStack.performAction("State2");
console.log(undoneStack.getCurrentState()); // Output: "State2"
console.log(undoneStack.undo()); // Output: "State2"
console.log(undoneStack.getCurrentState()); // Output: "State1"
console.log(undoneStack.redo()); // Output: "State2"
console.log(undoneStack.getCurrentState()); // Output: "State2"
