/**
 * Find the Kth Largest Element in an Array using a Min-Heap
 *
 * Instructions:
 * 1. Find the Kth Largest Element: Given an unsorted array, find the kth largest element.
 * 2. Use a Min-Heap: Utilize a min-heap to efficiently solve the problem.
 *
 * Input:
 * - An array of integers, arr.
 * - An integer, k, representing the kth largest element to find.
 *
 * Output:
 * - The kth largest element in the array.
 *
 * Solution:
 * 1. Create a Min-Heap: Use a min-heap of size k to keep track of the k largest elements.
 * 2. Heap Operations:
 *    - Push elements: Add elements from the array to the heap.
 *    - Maintain heap size: If the heap exceeds size k, remove the smallest element.
 * 3. Result: The root of the heap will be the kth largest element.
 *
 * Time Complexity: O(n log k), where n is the number of elements in the array.
 * Space Complexity: O(k), for storing the k elements in the heap.
 */

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
            if (this.heap[parentIndex] <= this.heap[index]) break;
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

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
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
function findKthLargest(arr, k) {
    const minHeap = new MinHeap();
    for (let num of arr) {
        minHeap.add(num);
        if (minHeap.size() > k) {
            minHeap.remove();
        }
    }

    return minHeap.peek();
}
const arr = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findKthLargest(arr, k)); // Output: 5
