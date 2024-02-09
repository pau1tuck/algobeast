class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let current = head;
    let previous = null;
    let next = null;

    while (current !== null) {
        next = current.next; // Store the next node
        current.next = previous; // Update the current node's next pointer
        previous = current; // Move previous and current pointers
        current = next; // Move the current pointer forward
    }

    // At the end, 'previous' will point to the new head of the reversed list
    return previous;
}

// Example usage
const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);

const reversedList = reverseLinkedList(list);
// The reversedList will have the nodes: 3 -> 2 -> 1
