/* Instructions: A small frog wants to get to the other side of a river.
The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1).
Leaves fall from a tree onto the surface of the river.
You are given an array arr consisting of N integers representing the falling leaves.
arr[K] represents the position where one leaf falls at time K, measured in seconds.
The goal is to find the earliest time when the frog can jump to the other side of the river.
The frog can cross only when leaves appear at every position across the river from 1 to X
(that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves).
You may assume that the speed of the current in the river is negligibly small,
i.e. the leaves do not change their positions once they fall in the river. */
function frogRiverOne(X, arr) {
    const positions = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= X) {
            positions.add(arr[i]);
        }
        if (positions.size === X) {
            return i; // The earliest time when all positions are covered
        }
    }
    return -1; // Not all positions can be covered
} // Time: O(n), where n is the length of array arr; Space: O(x), where x is the distinct positions to be covered

/* Explanation:
- positions is a Set used to track unique leaf positions that have fallen. It ensures no duplicates and easy checking of whether all required positions have leaves.
- Loop through the array `arr`, and for each leaf falling (represented by elements in `arr`), check if it falls in the range from 1 to X.
- Add each valid leaf's position to the positions set.
- When the size of positions equals `X` (meaning all positions from 1 to X are covered), return the current index `i`, which represents the earliest time all positions are covered.
- If the loop finishes without covering all positions, return -1. */