// Given two arrays, return a new array containing the common elements between the two.

function findCommonElementsSet(arr1, arr2) {
    let commonElements = new Set();
    let firstArraySet = new Set(arr1); // Create a Set from the first array

    for (let element of arr2) {
        if (firstArraySet.has(element)) {
            // If the element is in the Set, it's common
            commonElements.add(element);
        }
    }

    return [...commonElements]; // Convert the Set of common elements back to an array
}

function findCommonElementsHashMap(arr1, arr2) {
    let commonElements = [];
    let hashMap = {};

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

function findCommonElementsMap(arr1, arr2) {
    let commonElements = [];
    let map = new Map();

    // Populate the Map with elements from the first array
    for (let element of arr1) {
        map.set(element, true); // Mark each element as seen
    }

    // Iterate through the second array to find common elements
    for (let element of arr2) {
        if (map.get(element)) {
            // If the element is found in the Map, it's a common element
            commonElements.push(element);
            map.set(element, false); // Mark as added to avoid duplicates
        }
    }

    return commonElements;
}