/* Instructions: Generate Binary Numbers from 1 to `n`: Use a queue to generate the first `n` binary numbers.
This involves a simple iterative process of appending '0' and '1' to previous numbers and using a queue to manage the sequence generation. */

function generateBinaryNumbersUpTo(n) {
    let result = [];
    let queue = [];
    // Start with the first binary number.
    queue.push("1");

    while (n-- > 0) { // Iterate from `n` to 0.
        // Retrieve and remove the front of the queue.
        let front = queue.shift();
        // Add to the result
        result.push(front);
        // Generate the next two binary numbers and add them to the queue.
        queue.push(front + "0");
        queue.push(front + "1");
    }
    return result;
} // Time: O(n), Space O(n)