let map = new Map();
map.set(key, value); //: entire Map
map.get(key); //: x or undefined
map.has(key); //: boolean
map.delete(key); //: boolean
map.clear(); // Clear all entries
map.size; // Property for number of entries

// Iteration methods
let keys = map.keys(); // Iterator for keys
for (let key of keys) {
    console.log(key); // Will log 'a', 'b', 'c'
}rray
let keysArray = [...map.keys()]; // ['a', 'b', 'c']


let values = map.values(); // Iterator for values

map.entries(); // Iterator for [key, value] pairs

// forEach method for iteration
map.forEach((value, key, map) => {
    // Function to execute for each entry
});

// Conversion to arrays
[...map]; // Convert to array of [key, value] pairs
[...map.keys()]; // Convert keys to array
[...map.values()]; // Convert values to array

// Direct iteration using for...of
for (let [key, value] of map) {
    // Access key and value
}

// Destructuring in function parameters
map.forEach(([key, value]) => {
    // Function using key and value
});

/*
ADVANTAGES OF MAP OBJECT:
Key Flexibility: Map allows keys of any type, including objects, while plain objects typically have string or symbol keys. This can be super handy when you need to use more complex keys.

Order of Elements: Elements in a Map are ordered by their insertion order, which can be beneficial if you need to maintain the sequence of your entries. Plain objects don't guarantee property order, especially with numeric keys.

Size Property: A Map directly provides the size property, making it easy to find out the number of key/value pairs. With plain objects, you'd have to manually keep track of size or use Object.keys(obj).length.

Performance: For larger datasets, or when adding and removing key-value pairs frequently, Map can offer better performance. This is because Map is optimized for frequent additions and deletions.

Default Behavior: Plain objects come with a prototype, which means they have default keys that could interfere with your own keys. A Map doesn't have this issue because it doesn't inherit from Object.prototype.
*/