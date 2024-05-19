/* Task: Determine if a linked list contains a cycle.
Challenge: Use Floyd’s Tortoise and Hare algorithm to detect a cycle in a linked list. */

function hasCycle(head) {
    if (!head || !head.next) return false;
    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (!fast || !fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}
