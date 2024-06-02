/* Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node. */
// Turing.com:
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function deserialize(queue) {
    if (!queue.length || queue[0] === null) return null;
    let root = new TreeNode(queue[0]);
    let nodeQueue = [root];
    let i = 1;
    while (i < queue.length) {
        let current = nodeQueue.shift();
        if (queue[i] !== null) {
            current.left = new TreeNode(queue[i]);
            nodeQueue.push(current.left);
        }
        i++;
        if (i < queue.length && queue[i] !== null) {
            current.right = new TreeNode(queue[i]);
            nodeQueue.push(current.right);
        }
        i++;
    }
    return root;
}
function maxDepth(root) {
    if (root === null) {
        return 0;
    }
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
}
// Example usage
const queue = [3, 9, 29, null, null, 25, 7];
const root1 = deserialize(queue);
console.log(maxDepth(root1)); // Should return the maximum depth of the tree

// ==================================================================

// Array to Tree method
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
function arrayToTree(arr) {
    if (arr.length === 0) return null;
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
        let current = queue.shift();
        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }
    return root;
}
function maxDepth(root) {
    if (root === null) {
        return 0;
    }
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
}
// Example usage
const arr = [3, 9, 29, null, null, 25, 7];
const root = arrayToTree(arr);
console.log(maxDepth(root)); // Should return the maximum depth of the tree