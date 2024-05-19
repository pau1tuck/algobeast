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
}
