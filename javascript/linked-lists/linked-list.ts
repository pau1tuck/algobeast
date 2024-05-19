// Defining a class named 'NodeTS_' that is generic (type parameter T).
class NodeTS_<T> {
    // This is the value that this node holds. It's of generic type T.
    value: T;

    // This is a pointer/reference to the next node in the linked list.
    // Initially, it's null because when we create a node, it doesn't link to any other node.
    next: NodeTS_<T> | null = null;

    // Constructor for the NodeTS_ class. This gets called when a new NodeTS_ object is instantiated.
    constructor(value: T) {
        // Setting the value of this node to the value passed in the constructor.
        this.value = value;
    }
}

// Defining a class named 'LinkedList' that is also generic.
class LinkedListTS<T> {
    // This is the starting node of the linked list.
    // Initially, it's null because when we create a linked list, it's empty.
    private head: NodeTS_<T> | null = null;

    // Method to add a new node at the end of the linked list.
    append(value: T): void {
        // Create a new node with the given value.
        const newNodeTS_ = new NodeTS_(value);
        // If the list is empty (head is null), make the new node the head.
        if (!this.head) {
            this.head = newNodeTS_;
            return;
        }

        // If the list isn't empty, find the last node.
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        // Set the next property of the last node to the new node, appending it to the list.
        current.next = newNodeTS_;
    }

    // Method to insert a new node at a specific position in the list.
    insertAt(value: T, index: number): void {
        const newNodeTS_ = new NodeTS_(value);
        // If the index is 0, it means we're inserting at the start.
        if (index === 0) {
            newNodeTS_.next = this.head; // Make the new node point to the current head.
            this.head = newNodeTS_; // Update the head to be the new node.
            return;
        }

        // If the index isn't 0, find the node right before the desired position.
        const previous = this.getNodeTS_At(index - 1);
        if (!previous) {
            throw new Error('Index out of bounds'); // If there's no node at that position, throw an error.
        }
        // Set the new node's next property to the next node of the previous node.
        newNodeTS_.next = previous.next;
        // Update the next property of the previous node to be the new node.
        previous.next = newNodeTS_;
    }

    // Method to get the value of a node at a specific position.
    get(index: number): T | null {
        const NodeTS_ = this.getNodeTS_At(index);
        // Return the value if the node exists, otherwise return null.
        return NodeTS_ ? NodeTS_.value : null;
    }

    // Method to remove a node from a specific position in the list.
    removeAt(index: number): void {
        // If the index is 0, remove the head node.
        if (index === 0) {
            if (!this.head) {
                return; // If there's no head (empty list), there's nothing to remove.
            }
            this.head = this.head.next; // Update the head to be the next node.
            return;
        }

        // If the index isn't 0, find the node right before the desired position.
        const previous = this.getNodeTS_At(index - 1);
        if (!previous || !previous.next) {
            throw new Error('Index out of bounds'); // If there's no node at that position, throw an error.
        }
        // Update the next property of the previous node to skip the node at the given index.
        previous.next = previous.next.next;
    }

    // Helper method to find and return the node at a specific position.
    private getNodeTS_At(index: number): NodeTS_<T> | null {
        if (index < 0) {
            return null; // If the index is negative, return null.
        }

        let current = this.head; // Start at the head of the list.
        // Traverse the list node by node until the desired index or the end of the list.
        for (let i = 0; i < index && current; i++) {
            current = current.next;
        }
        // Return the node found, or null if there's no node at that index.
        return current;
    }
}
