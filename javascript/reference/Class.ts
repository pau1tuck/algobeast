class Student {
    private _name: string; // Private property, accessible only within the class.

    // Static property, belongs to the class rather than an instance of the class.
    static university = "University of Oxford";

    // Public property, accessible from outside the class.
    public age: number;

    // A special method for creating and initializing an object of a class.
    constructor(name: string, age: number) {
        this._name = name;
        this.age = age;
    }
    // Getter, a way to access the private value of '_name'.
    get name(): string {
        return this._name;
    }
    // Setter, a way to change the private value of '_name'.
    set name(newName: string) {
        if (newName.length < 2) {
            console.log("Name is too short.");
        } else {
            this._name = newName;
        }
    }
    // Object method.
    introduceSelf() {
        return `Hello, my name is ${this._name} and I'm ${this.age} years old.`;
    }
    // Static method, belongs to the class rather than an instance of the class.
    static schoolInfo() {
        return `This student is studying at ${this.university}.`;
    }
}
const student1 = new Student("Paul", 21); // Object instantiation.
console.log(student1.age); // 21

student1.name = "David"; // Setter

console.log(student1.name); // Getter, "David"
// Object method:
console.log(student1.introduceSelf()); // "Hello, my name is David and I'm 21 years old."

console.log(Student.university); // Static property, "Oxford University"
// Static method.
console.log(Student.schoolInfo()); // "This student is studying at Oxford University."
