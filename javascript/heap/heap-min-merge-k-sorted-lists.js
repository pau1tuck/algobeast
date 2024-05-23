/**
 * Merge K Sorted Lists using a Min-Heap
 *
 * Instructions:
 * 1. Merge K Sorted Lists: Given 'k' sorted linked lists, merge them into one sorted linked list.
 * 2. Use a Min-Heap: Utilize a min-heap to efficiently merge the lists.
 *
 * Input:
 * - An array of k sorted linked lists.
 *
 * Output:
 * - A single merged sorted linked list.
 *
 * Solution:
 * 1. Create a Min-Heap: Use a min-heap to keep track of the smallest elements from each list.
 * 2. Heap Operations:
 *    - Push the first node of each list into the heap.
 *    - Extract the smallest node from the heap and add it to the merged list.
 *    - Push the next node from the extracted node's list into the heap.
 * 3. Repeat until all nodes are processed.
 *
 * Time Complexity: O(N log k), where N is the total number of nodes and k is the number of lists.
 * Space Complexity: O(k), for storing the k elements in the heap.
 */
// Definition for a ListNode.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
// Min-Heap class to manage the heap operations
class MinHeap {
    constructor() {
        this.heap = [];
    }
    // Helper functions to get the indices of parent and children
    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }

    // Helper functions to swap elements
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    // Add a new element to the heap
    add(val) {
        this.heap.push(val);
        this.heapifyUp();
    }
    // Remove and return the smallest element from the heap
    remove() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }
    // Move the last element up to maintain heap property
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex].val <= this.heap[index].val) break;
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }
    // Move the root element down to maintain heap property
    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            let smallestIndex = index;

            if (leftChildIndex < length && this.heap[leftChildIndex].val < this.heap[smallestIndex].val) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex].val < this.heap[smallestIndex].val) {
                smallestIndex = rightChildIndex;
            }
            if (smallestIndex === index) break;
            this.swap(index, smallestIndex);
            index = smallestIndex;
        }
    }
    // Get the smallest element from the heap without removing it
    peek() {
        return this.heap[0];
    }
    // Get the size of the heap
    size() {
        return this.heap.length;
    }
}

function mergeKLists(lists) {
    const minHeap = new MinHeap();
    // Push the head of each list into the min-heap
    for (let list of lists) {
        if (list !== null) {
            minHeap.add(list);
        }
    }
    // Dummy head for the result list
    const dummy = new ListNode();
    let current = dummy;
    // While the heap is not empty
    while (minHeap.size() > 0) {
        // Extract the smallest node from the heap
        const minNode = minHeap.remove();
        // Add it to the result list
        current.next = minNode;
        current = current.next;
        // If there is a next node, push it into the heap
        if (minNode.next !== null) {
            minHeap.add(minNode.next);
        }
    }
    return dummy.next;
}
const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));

const lists = [list1, list2, list3];
const mergedList = mergeKLists(lists);

let current = mergedList;
while (current !== null) {
    console.log(current.val); // Output: 1, 1, 2, 3, 4, 4, 5, 6
    current = current.next;
}
