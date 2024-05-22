// Instructions: Given an array `arr` of integers, remove duplicates and return a new array.

const removeDuplicates = arr => {
    // Remove duplicates by converting the array to a Set, then back to an array:
    const uniqueArray = Array.from(new Set(arr));
    return uniqueArray;
};
const hasDuplicates = arr => {
    // Remove duplicates:
    const numsSet = new Set(arr);
    // If the size of the Set is the same as arr length, no duplicates existed.
    const sizesAreEqual = numsSet.size === arr.length;
    // If sizes are not equal, it means there were duplicates in the array.
    return !sizesAreEqual;
};
const findDuplicates = arr => {
    const elementCount = {}; // Object to hold the count of each element
    const duplicates = []; // Array to hold the duplicated elements
    // Iterate over the array and count each element
    for (const item of arr) {
        elementCount[item] = (elementCount[item] || 0) + 1;
    }
    for (const [item, count] of Object.entries(elementCount)) {
        if (count > 1) {
            duplicates.push(item);
        }
    }
    return duplicates; // Return the array of duplicates
};
