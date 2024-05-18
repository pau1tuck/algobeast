// Simple solution to the project with linked list already provided:
function reverseList(head) {
	let prev = null; // Initialize previous node pointer as null
	let current = head; // Start with the head as the current node

	// Iterate through the list until all nodes are visited
	while (current) {
		const nextTemp = current.next; // Temporarily store the next node
		current.next = prev; // Reverse the current node's pointer to point to the previous node
		prev = current; // Move the previous node pointer up to the current node
		current = nextTemp; // Move the current node pointer up to the next node (originally stored in nextTemp)
	}

	// At the end, prev will point to the new head of the reversed list
	return prev;
}

// ***********************************************************************

// LinkedList OOP node class definition of linked list using modern ES6+ syntax:
class NodeES6 {
	constructor(val) {
		this.val = val; // Value of the node
		this.next = null; // Pointer to the next node, initialized as null
	}
}

function reverseListES6(head) {
	let prev = null; // Initialize previous node pointer as null
	let current = head; // Start with the head as the current node

	// Iterate through the list until all nodes are visited
	while (current) {
		const nextTemp = current.next; // Temporarily store the next node
		current.next = prev; // Reverse the current node's pointer to point to the previous node
		prev = current; // Move the previous node pointer up to the current node
		current = nextTemp; // Move the current node pointer up to the next node (originally stored in nextTemp)
	}

	// At the end, prev will point to the new head of the reversed list
	return prev;
}

// Test case setup
const head = new NodeES6(1); // Head node
head.next = new NodeES6(2); // Second node
head.next.next = new NodeES6(3); // Third node
head.next.next.next = new NodeES6(4); // Fourth node

const reversedList = reverseListES6(head); // Execute the reverseList function
