class Node_ {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode_ = new Node_(value);
        if (!this.head) {
            this.head = newNode_;
            this.tail = newNode_;
            return;
        }

        this.tail.next = newNode_;
        newNode_.prev = this.tail;
        this.tail = newNode_;
    }

    insertAt(value, index) {
        const newNode_ = new Node_(value);
        if (index === 0) {
            if (this.head) {
                newNode_.next = this.head;
                this.head.prev = newNode_;
            } else {
                this.tail = newNode_;
            }
            this.head = newNode_;
            return;
        }

        const previous = this.getNode_At(index - 1);
        if (!previous) {
            throw new Error("Index out of bounds");
        }

        const nextNode = previous.next;
        newNode_.next = nextNode;
        newNode_.prev = previous;
        previous.next = newNode_;
        if (nextNode) {
            nextNode.prev = newNode_;
        } else {
            this.tail = newNode_;
        }
    }

    get(index) {
        const node_ = this.getNode_At(index);
        return node_ ? node_.value : null;
    }

    removeAt(index) {
        if (index === 0) {
            if (!this.head) {
                return;
            }
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
            return;
        }

        const node_ = this.getNode_At(index);
        if (!node_) {
            throw new Error("Index out of bounds");
        }

        const prevNode = node_.prev;
        const nextNode = node_.next;
        if (prevNode) {
            prevNode.next = nextNode;
        }
        if (nextNode) {
            nextNode.prev = prevNode;
        } else {
            this.tail = prevNode;
        }
    }

    getNode_At(index) {
        if (index < 0) {
            return null;
        }

        let current = this.head;
        for (let i = 0; i < index && current; i++) {
            current = current.next;
        }
        return current;
    }
}
