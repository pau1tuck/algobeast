/* Task: Merge two sorted linked lists into one sorted linked list.
Challenge: Implement an algorithm to merge two sorted linked lists into one sorted list while maintaining the order. */

function mergeTwoLists(l1, l2) {
    const dummy = new Node_(0);
    let current = dummy;
    while (l1 && l2) {
        if (l1.value < l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 ? l1 : l2;
    return dummy.next;
}
