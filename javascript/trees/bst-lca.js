/* Given a binary tree, find the lowest common ancestor (LCA) of two given nodes.
        root: The root node of the binary tree.
        p: The first node for which we want to find the lowest common ancestor.
        q: The second node for which we want to find the lowest common ancestor.
*/
function lowestCommonAncestor(root, p, q) {
    // Base case: if the current node is null, or matches one of the nodes p or q, return the current node.
    if (root === null || root === p || root === q) {
        return root;
    }
    // Recursively find LCA in the left subtree:
    const left = lowestCommonAncestor(root.left, p, q);
    // Recursively find LCA in the right subtree:
    const right = lowestCommonAncestor(root.right, p, q);
    // If both left and right are not null, it means p and q are found in different subtrees, so the current node is the LCA.
    if (left !== null && right !== null) {
        return root;
    }
    // Otherwise, return the non-null value (either left or right) which indicates where p or q was found.
    return left !== null ? left : right;
}
