class UndoStack {
    constructor() {
        this.currentStack = [];
        this.undoStack = [];
    }
    // Perform an action and save state
    performAction(state) {
        this.currentStack.push(state);
        // Clear the undo stack because we can no longer redo after a new action
        this.undoStack = [];
    }
    // Undo the last action
    undo() {
        if (this.currentStack.length > 0) {
            const state = this.currentStack.pop();
            this.undoStack.push(state);
            return state;
        }
        return null; // No state to undo
    }
    // Redo the last undone action
    redo() {
        if (this.undoStack.length > 0) {
            const state = this.undoStack.pop();
            this.currentStack.push(state);
            return state;
        }
        return null; // No state to redo
    }
    // Get the current state
    getCurrentState() {
        if (this.currentStack.length > 0) {
            return this.currentStack[this.currentStack.length - 1];
        }
        return null; // No current state
    }
}

const undoStack = new UndoStack();
undoStack.performAction("State1");
undoStack.performAction("State2");
console.log(undoStack.getCurrentState()); // Output: "State2"
console.log(undoStack.undo()); // Output: "State2"
console.log(undoStack.getCurrentState()); // Output: "State1"
console.log(undoStack.redo()); // Output: "State2"
console.log(undoStack.getCurrentState()); // Output: "State2"
