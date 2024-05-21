/* Instructions: Given an array of integers, where all elements but one occur twice, find the unique element.
Input: The first line contains a single integer, `n`, the number of integers in the array.
The second line contains `n` space-separated integers that describe the values in `a`.
Output: `int`, the element that occurs only once. */

function uniqueElementXor(arr) {
    // [2,2,3,1,1,0,0]
    return arr.reduce((a, b) => a ^ b, 0); // acca = 3
} // Time: O(n), Space: O(1)

// =====================================
function uniqueElementHashMap(arr) {
    let hashMap = {};
    arr.forEach(num => {
        if (hashMap[num]) {
            // If number is already in the hash map, remove it.
            delete hashMap[num];
        } else {
            // Else, add it to the hash map.
            hashMap[num] = true;
        }
    });
    return Object.keys(hashMap)[0];
} // Time: O(n), Space: O(n)

/* XOR operation: Any number that appears twice will become 0.
Any number that appears once will remain as it is.
The result of the XOR operation is the number that appears only once in the array.*`