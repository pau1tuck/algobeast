/* The beauty of using a **`Symbol`** is that it's unique and it doesn't clash with any other property key in the object. Moreover, properties keyed by **`Symbol`** are not included in the output of **`Object.keys()`**, **`Object.getOwnPropertyNames()`**, **`JSON.stringify()`**, etc., making them kind of "hidden" (not truly private) and less likely to be accidentally changed or overwritten.

**`Symbol`** properties are not completely private. They can be accessed if the **`Symbol`** is known or via **`Object.getOwnPropertySymbols()`**. But they add an extra layer of safety against property name clashes, and can serve as a mechanism for attaching metadata to objects in a way that doesn't interfere with other uses of the object. */

const studentIdSymbol = Symbol("studentId");

class MyStudent {
  public name: string;
  [studentIdSymbol]: string;  // Using symbol as a property key

  constructor(name: string, id: string) {
    this.name = name;
    this[studentIdSymbol] = id;
  }
  displayId() {
    return this[studentIdSymbol];
  }
}
const myStudent1 = new MyStudent("John Doe", "123");
console.log(myStudent1.name);  // Output: John Doe
console.log(myStudent1.displayId());  // Output: s123

// Attempt to access symbol property directly
console.log(myStudent1[studentIdSymbol]);  // Output: s123
console.log(myStudent1["studentIdSymbol"]);  // Output: undefined