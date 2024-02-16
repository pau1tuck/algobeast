let string = "   Hello, World!   ";
string.length;

str.indexOf("World"); // 7 (index of first char)
str.slice(7, 12); // "World" (more flexible than substring)
str.slice(-7, -1); // "World"
str.split(", "); // ["Hello", "World!"]
str.split(/(?=[A-Z])/);
str.substring(1, 4); // "ell" (uses indices, no negatives)
let str = string.trim(); // "Hello, World!"

str.toLowerCase(); // "hello, world!"
str.toUpperCase(); // "HELLO, WORLD!"
"Hello".concat(", ", "World!"); // "Hello, World!"

"Hello, World!".startsWith("Hello"); // true
"Hello, World!".endsWith("!"); // true
"Hello, World!".includes("World"); // true

"Hello, World!".match(/Hello/); // Returns an array ["Hello", index: 0, input: "Hello, World!", groups: undefined]
"Hello, World!".replace("World", "Earth"); // "Hello, Earth!"
"Hello, World, World!".replaceAll("World", "Earth"); // "Hello, Earth, Earth!"
"Hello".repeat(3); // "HelloHelloHello"

"Hello".charAt(1); // "e"
"Hello".charCodeAt(0); // 72 (Unicode)
String.fromCharCode(72); // "H"
"ä".localeCompare("z", "de"); // a negative value: in German, 'ä' is sorted after 'z'

/*** parseInt(string, radix) ***/
parseInt("64");
parseInt("64");
parseInt("64.00");
parseInt("64.33");
parseInt("64 45 66");
parseInt(" 64 ");
parseInt("64 years");
parseInt("n = 64");
parseInt("64", 2); // 1000000 (binary)

// string.padStart(max_length, value)
String(today.getDate()).padStart(2, "0"); //
String(today.getMonth() + 1);

// String.padEnd(max_length, value)
let products = ["Apple", "Banana", "Cherry", "Dates", "Elderberry"];
for (let product of products) {
    console.log(product.padEnd(12, "-") + " $1.00");
}
/* Output:
Apple------- $1.00
Banana------ $1.00
Cherry------ $1.00
Dates------- $1.00
Elderberry-- $1.00
*/
