function inOrderTraversal(root) {
    if (root !== null) {
        inOrderTraversal(root.left);
        console.log(root.value);
        inOrderTraversal(root.right);
    }
}

function preOrderTraversal(root) {
    if (root !== null) {
        console.log(root.value);
        preOrderTraversal(root.left);
        preOrderTraversal(root.right);
    }
}

function postOrderTraversal(root) {
    if (root !== null) {
        postOrderTraversal(root.left);
        postOrderTraversal(root.right);
        console.log(root.value);
    }
}
// ====================================== //
/* TREE CONSTRUCTION */
class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
// Example binary tree:
//      3
//     / \
//    9  20
//      /  \
//     15   7
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
