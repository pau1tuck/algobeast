/* Instructions: A small frog wants to get to the other side of the road.
The frog is currently located at position X and wants to get to a position greater than or equal to Y.
The small frog always jumps a fixed distance, D.
Count the minimal number of jumps that the small frog must perform to reach its target.
Input: int X, int Y, int D
Output: int
*/
function frogJump(X, Y, D) {
    return Math.ceil((Y - X) / D);
} // Time: O(1), Space: O(1)
