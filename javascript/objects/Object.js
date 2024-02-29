// Safest method: `Object.keys(obj)`
for (let key of Object.keys(obj)) {} // creates an array of the object's enumerable properties

for (let key in myObject) { // Loop through an object
	if (myObject.hasOwnProperty(key)) {
		console.log(`${key}: ${myObject[key]}`); // logs "key: value"
	}
}
const action = { // `this`
	name: "Paul",
	greet() {
		console.log(`My name is ${this.name}.`);
	}
};

Object.keys(obj).forEach(key => {
    console.log(`Key: ${key}, Name: ${obj[key]}`);
});
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`Key: ${key}, Name: ${obj[key]}`);
    }
}

Object.assign({}, obj1, obj2); // Creates a new object by copying values from obj1 and then obj2
delete obj.name; // (won't delete while frozen)
Object.entries(obj); // [["name","Paul"],["age",28],...]
Object.freeze(obj);
Object.getOwnPropertyNames(obj); // ["name", "age", "city", "country"] // including private properties
obj.hasOwnProperty("age"); // :boolean
Object.isFrozen(obj); // true or false
Object.keys(obj); // ["name", "age", "city", "country"] // like `for...in`
Object.seal(obj); // No add/remove, only edit
Object.values(obj); // ["Paul", 28, "Plymouth", "England"]

Object.getPrototypeOf(obj); // Object.prototype
Object.setPrototypeOf(obj, action);

// Check if two values are the same value (not necessarily the same object)
Object.is(42, 42); // true
Object.is({}, {}); // false

// Define or modify a property with attributes
Object.defineProperty(obj, 'newProperty', {
	value: 'newValue',
	writable: true,  // can be changed
	enumerable: true, // can be looped over
	configurable: true // can be deleted
});
console.log(obj.newProperty); // "newValue"

// Define or modify multiple properties
Object.defineProperties(obj, {
    prop1: { value: 'value1', writable: true },
    prop2: { value: 'value2', writable: false }
});