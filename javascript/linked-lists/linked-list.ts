class NodeTS_<T> {
    value: T;
    next: NodeTS_<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListTS<T> {
    head: NodeTS_<T> | null;

    constructor() {
        this.head = null;
    }

    // Append a node at the end
    append(value: T): void {
        const newNodeTS_ = new NodeTS_(value);
        if (!this.head) {
            this.head = newNodeTS_;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNodeTS_;
    }

    insertAtBeginning(value: T): void {
        const newNode = new NodeTS_(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAt(value: T, index: number): void {
        const newNodeTS_ = new NodeTS_(value);
        if (index === 0) {
            newNodeTS_.next = this.head;
            this.head = newNodeTS_;
            return;
        }

        const previous = this.getNodeTS_At(index - 1);
        if (!previous) {
            throw new Error("Index out of bounds");
        }
        newNodeTS_.next = previous.next;
        previous.next = newNodeTS_;
    }

    // Get the value of a node at a specific index
    get(index: number): T | null {
        const node_ = this.getNodeTS_At(index);
        return node_ ? node_.value : null;
    }

    // Remove a node at a specific index
    removeAt(index: number): void {
        if (index === 0) {
            if (!this.head) {
                return;
            }
            this.head = this.head.next;
            return;
        }

        const previous = this.getNodeTS_At(index - 1);
        if (!previous || !previous.next) {
            throw new Error("Index out of bounds");
        }

        previous.next = previous.next.next;
    }

    // Remove the first node with the specified value
    deleteNode(value: T): void {
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

    getNodeTS_At(index: number): NodeTS_<T> | null {
        if (index < 0) {
            return null;
        }

        let current = this.head;
        for (let i = 0; i < index && current; i++) {
            current = current.next;
        }
        return current;
    }

    printList(): void {
        let current = this.head;
        let result: T[] = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}

// Usage example with edge cases
const listTS = new LinkedListTS<number>();
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
