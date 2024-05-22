/* Linked List Cycle Detection involves determining whether a linked list contains a cycle, where a node points back to a previous node in the list. Here's how you can approach it:
1. Floyd's Tortoise and Hare Algorithm: Use two pointers, one moving slower (tortoise) and the other moving faster (hare).
2. Detect Cycle: If there's a cycle, the faster pointer will eventually catch up to the slower pointer.
3. Find Starting Node: After detecting a cycle, reset one of the pointers to the head of the list and move both pointers one step at a time until they meet again. The meeting point is the starting node of the cycle. */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
function detectCycle(head) {
    let tortoise = head;
    let hare = head;
    // Move tortoise one step and hare two steps
    while (hare && hare.next) {
        tortoise = tortoise.next;
        hare = hare.next.next;

        if (tortoise === hare) {
            break; // Cycle detected
        }
    }
    if (!hare || !hare.next) {
        return null; // No cycle
    }
    tortoise = head;
    // Move both pointers one step until they meet again
    while (tortoise !== hare) {
        tortoise = tortoise.next;
        hare = hare.next;
    }
    return tortoise; // Starting node of the cycle
}
/* ------------------------------------------ */
// Example linked list with a cycle
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creating a cycle

// Detect cycle and find starting node
const cycleStartNode = detectCycle(node1);

// Output the result
if (cycleStartNode) {
    console.log("Cycle starting node:", cycleStartNode.val);
} else {
    console.log("No cycle found.");
}
