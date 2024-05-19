class Node_ {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode_ = new Node_(value);
        if (!this.head) {
            this.head = newNode_;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode_;
    }

    insertAtBeginning(value) {
        const newNode = new Node_(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAt(value, index) {
        const newNode_ = new Node_(value);
        if (index === 0) {
            newNode_.next = this.head;
            this.head = newNode_;
            return;
        }

        const previous = this.getNode_At(index - 1);
        if (!previous) {
            throw new Error("Index out of bounds");
        }
        newNode_.next = previous.next;
        previous.next = newNode_;
    }

    get(index) {
        const node_ = this.getNode_At(index);
        return node_ ? node_.value : null;
    }

    removeAt(index) {
        if (index === 0) {
            if (!this.head) {
                return;
            }
            this.head = this.head.next;
            return;
        }

        const previous = this.getNode_At(index - 1);
        if (!previous || !previous.next) {
            throw new Error("Index out of bounds");
        }

        previous.next = previous.next.next;
    }
    deleteNode(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    getNode_At(index) {
        if (index < 0) {
            return null;
        }

        let current = this.head;
        for (let i = 0; i < index && current; i++) {
            current = current.next;
        }
        return current;
    }
}
// All Time Complexities: O(n)

// Usage example with edge cases
const list = new LinkedList();

// Appending nodes
list.append(1); // Edge case: Empty list
list.append(2); // Single node
list.append(3);

// Inserting nodes
list.insertAt(0, 0); // Edge case: Inserting at the beginning
list.insertAt(4, 4); // Edge case: Inserting at the end
try {
    list.insertAt(5, 10); // Edge case: Out of bounds
} catch (e) {
    console.error(e.message);
}

// Removing nodes
list.removeAt(0); // Edge case: Removing from the beginning
try {
    list.removeAt(10); // Edge case: Out of bounds
} catch (e) {
    console.error(e.message);
}

// Getting values
console.log(list.get(1)); // Should print 2
console.log(list.get(5)); // Edge case: Out of bounds, should print null
