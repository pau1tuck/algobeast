function breadthFirstSearch(root) {
    const queue = [];
    if (root !== null) {
        queue.push(root);
    }
    while (queue.length > 0) {
        const node = queue.shift();
        console.log(node.value);

        if (node.left !== null) {
            queue.push(node.left);
        }
        if (node.right !== null) {
            queue.push(node.right);
        }
    }
}
