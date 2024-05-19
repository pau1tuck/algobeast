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

    // Append a node at the end
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

    // Get the value of a node at a specific index
    get(index) {
        const node_ = this.getNode_At(index);
        return node_ ? node_.value : null;
    }

    // Remove a node at a specific index
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

    // Remove the first node with the specified value
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

    printList() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}
// Usage example with edge cases
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.printList(); // Output: 1 -> 2 -> 3

list.insertAt(4, 1);
list.printList(); // Output: 1 -> 4 -> 2 -> 3

list.removeAt(2);
list.printList(); // Output: 1 -> 4 -> 3

list.deleteNode(1);
list.printList(); // Output: 4 -> 3

list.insertAtBeginning(0);
list.printList(); // Output: 0 -> 4 -> 3

console.log(list.get(1)); // Output: 4
console.log(list.get(3)); // Output: null (out of bounds)
