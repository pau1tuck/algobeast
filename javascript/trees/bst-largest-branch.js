/* Suppose you're given a binary tree represented as an array. For example, [3, 6, 2, 9, -1, 10] where -1 is a non-existent node.
Write a function that determines whether the left or right branch of the tree is larger.
The size of each branch is the sum of the node values.
The function should return the string:
    - "Right" if the right side is larger
    - "Left" if the left side is larger.
If the tree has 0 nodes or if the size of the branches are equal, return the empty string.

Approach:
    - Convert the array representation into a binary tree.
    - Compute the sum of node values for the left and right branches.
    - Compare the sums and return the appropriate string. */

function compareBranches(treeArray) {
    function branchSum(index) {
        // Base case: If the index is out of bounds or the node is non-existent
        if (index >= treeArray.length || treeArray[index] === -1) {
            return 0;
        }
        // Recursively calculate the sum of the subtree rooted at this index
        return treeArray[index] + branchSum(2 * index + 1) + branchSum(2 * index + 2);
    }
    // Calculate the sum of the left and right branches starting from indices 1 and 2 respectively
    const leftSum = branchSum(1); // Index of left child of root
    const rightSum = branchSum(2); // Index of right child of root

    // Compare the sums and return the result
    if (leftSum > rightSum) {
        return "Left";
    } else if (rightSum > leftSum) {
        return "Right";
    } else {
        return "";
    }
}
// Edge Case:
if (treeArray.length === 0) {
    return "";
}
