let map = new Map();
Map.set(key, value); //: entire Map
Map.get(key); //: x or undefined
Map.has(key); //: boolean
Map.delete(key); //: boolean
Map.clear(); // Clear all entries
Map.size; // Property for number of entries

// Iteration
let keys = Map.keys(); // Iterator for keys
let values = Map.values(); // Iterator for values
let entries = Map.entries(); // Iterator for [key, value] pairs
for (let key of keys) {
    console.log(key); // Will log 'a', 'b', 'c'
}

for (let [key, value] of map.entries()) {
    console.log(`${key}: ${value}`); // This will log 'a: 1', 'b: 2', 'c: 3'
}
Map.forEach((value, key, map) => {
    // Function to execute for each entry
});
Map.forEach(([key, value]) => {
    // Function using key and value
});

for (let [key, value] of map) {
    // Access key and value
}

// Conversion to arrays
[...map]; // Convert to array of [key, value] pairs
let keysArray = [...Map.keys()]; // ['a', 'b', 'c']
let valuesArray = [...Map.values()]; // Convert values to array

/*
ADVANTAGES OF MAP OBJECT:
Key Flexibility: Map allows keys of any type, including objects, while plain objects typically have string or symbol keys. This can be super handy when you need to use more complex keys.

Order of Elements: Elements in a Map are ordered by their insertion order, which can be beneficial if you need to maintain the sequence of your entries. Plain objects don't guarantee property order, especially with numeric keys.

Size Property: A Map directly provides the size property, making it easy to find out the number of key/value pairs. With plain objects, you'd have to manually keep track of size or use Object.keys(obj).length.

Performance: For larger datasets, or when adding and removing key-value pairs frequently, Map can offer better performance. This is because Map is optimized for frequent additions and deletions.

Default Behavior: Plain objects come with a prototype, which means they have default keys that could interfere with your own keys. A Map doesn't have this issue because it doesn't inherit from Object.prototype.
*/