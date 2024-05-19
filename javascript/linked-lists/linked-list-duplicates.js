function removeDuplicates(head) {
    let current = head;
    while (current) {
        let runner = current;
        while (runner.next) {
            if (runner.next.value === current.value) {
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }
        current = current.next;
    }
}
