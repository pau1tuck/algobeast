/* XOR operation: Any number that appears twice will become 0.
Any number that appears once will remain as it is.
The result of the XOR operation is the number that appears only once in the array.*/
function uniqueElement(arr) {
    // [2,2,3,1,1,0,0]
    return arr.reduce((a, b) => a ^ b, 0); // acca = 3
}
// ----------
function uniqueElement(arr) {
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
}
