// Instructions: Given two arrays, `arr1` and `arr2`, return a new array containing the common elements between the two.

function findCommonElementsHashMap(arr1, arr2) {
    const commonElements = [];
    const hashMap = {};

    // Use the first array to populate the hash map
    for (let i = 0; i < arr1.length; i++) {
        hashMap[arr1[i]] = true; // Mark each element as seen
    }
    // Iterate through the second array to find common elements
    for (let i = 0; i < arr2.length; i++) {
        if (hashMap[arr2[i]]) {
            // If the element is in the hash map, it's a common element
            commonElements.push(arr2[i]);
            hashMap[arr2[i]] = false; // Mark as added to prevent duplicates in the result
        }
    }
    return commonElements;
}

function findCommonElementsSet(arr1, arr2) {
    const commonElements = new Set();
    const firstArraySet = new Set(arr1); // Create a Set from the first array
    for (const element of arr2) {
        if (firstArraySet.has(element)) {
            commonElements.add(element);
        }
    }
    return [...commonElements]; // Convert the Set of common elements back to an array
}
/* 1. Convert arr1 into a Set: This removes duplicate elements from arr1 and enables efficient element lookup operations. Use this Set to check for common elements in the next step.

2. Check for Common Elements: Iterate through arr2 and for each element, check if it exists in the Set created from arr1. This is a quick operation because Sets in JavaScript are implemented to allow fast checks for element existence.

3. Store Common Elements: Whenever you find a common element (i.e., an element from arr2 that exists in the Set of arr1), add this element to another Set named commonElements. This ensures that the collected common elements are unique.

4. Convert the Set of Common Elements to an Array: After finding all common elements, convert the Set commonElements back to an array to provide a suitable output format. This step also ensures the results are returned as a list, which is often more useful in application logic than a Set. */

function findCommonElementsMap(arr1, arr2) {
    const commonElements = [];
    const map = new Map();
    // Populate the Map with elements from the first array
    for (const element of arr1) {
        map.set(element, true); // Mark each element as seen
    }
    // Iterate through the second array to find common elements
    for (const element of arr2) {
        if (map.get(element)) {
            // If the element is found in the Map, it's a common element
            commonElements.push(element);
            map.set(element, false); // Mark as added to avoid duplicates
        }
    }
    return commonElements;
}
