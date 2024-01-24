//============================================================
// rotation.js
/*
Given an array arr and an integer k, rotate the array to the right or the left by k steps.
*/
function rotateRight(arr, k) {
    rotations = k % arr.length;
    for (let i = 0; i < rotations; i++) {
        arr.unshift(arr.pop());
    }
}

function rotateLeft(arr, k) {
    rotations = k % arr.length;
    for (let i = 0; i < rotations; i++) {
        arr.push(arr.shift());
    }
}
