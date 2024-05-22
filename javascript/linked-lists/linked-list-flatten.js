function flatten(head) {
    if (!head) return head;
    let current = head;
    while (current) {
        if (current.child) {
            let tempNext = current.next;
            current.next = current.child;
            current.child.prev = current;
            current.child = null;

            let tempCurrent = current.next;
            while (tempCurrent.next) {
                tempCurrent = tempCurrent.next;
            }
            tempCurrent.next = tempNext;
            if (tempNext) tempNext.prev = tempCurrent;
        }
        current = current.next;
    }
    return head;
} /* Time Complexity: O(n): Each node in the multilevel doubly linked list is visited and manipulated exactly once.
Space Complexity: O(1): Only a constant amount of extra space is used for a fixed number of pointers, regardless of the size of the input list. */
