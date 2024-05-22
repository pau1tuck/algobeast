const set = new Set([1, 2, 3, 4, 5]);
set.size; // Returns the number of values in the Set. Read-only.
set.add(value); // Appends a new element with the given value to the Set.
set.has(value); // Returns a boolean indicating whether the Set has the specified value.
set.clear(); // Removes all elements from the Set.
set.delete(value); // Removes the specified element from the Set. Returns true if element was removed, false if it wasn't found.
set.values(); // Returns a new Iterator object that contains the values for each element in the Set.
set.keys(); // Is the same function as the values() method and returns a new Iterator object that contains the values for each element in the Set.
set.entries(); // Returns a new Iterator object that contains an array of [value, value] for each element in the Set.
set.forEach(callbackFn, thisArg); // Executes the provided callback once for each value in the Set (in insertion order).

// Set objects are iterable, so you can use the for...of loop to iterate over its elements:
for (const value of set) {
}
