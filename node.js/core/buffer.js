// Buffer.from() method creates a new Buffer that contains a copy of the provided data.
let bufferOne = Buffer.from("Hello, World!"); // bufferOne.toString() = "Hello, World!"
// Buffer.toString() method reads (decodes) and returns a string from buffer data.
console.log(bufferTwo.toString()); // Outputs: Node.js

console.log(bufferOne.length); // Outputs: 13, the amount of memory allocated for the buffer in bytes.

let bufferTwo = Buffer.alloc(10);
bufferTwo.write("Node.js"); // writes a string to the buffer at a specific offset.

let bufferThree = Buffer.from(" is awesome!");
let bufferFour = Buffer.concat([bufferTwo, bufferThree]); // returns a new buffer
console.log(bufferFour.toString()); // Outputs: Node.js is awesome!

let bufferFive = Buffer.from("ABC");
let bufferSix = Buffer.from("BCD");
// Buffer.compare() returns a number indicating whether bufferOne comes before, after, or is the same as bufferTwo in sort order.
console.log(Buffer.compare(bufferFive, bufferSix)); // Outputs: -1

let bufferSeven = Buffer.from("Hello, Node.js!");
let bufferEight = Buffer.alloc(7);
// Buffer.copy() method copies data from a region of target buffer to a region in the source buffer.
bufferSeven.copy(bufferEight, 0, 0, 7);
console.log(bufferEight.toString()); // Outputs: Hello,

// Buffer.slice() returns new buffer that references the same memory as the original, offset and cropped by the start and end indices.
let bufferNine = bufferSeven.slice(0, 5);
console.log(bufferNine.toString()); // Outputs: Hello

/* TypedArrays like Uint8Array give you a way to work with binary data at the byte level. DataView provides a higher-level API for getting and setting values of specific types (like unsigned 8-bit integers, signed 16-bit integers, floating point numbers, etc.) at specific offsets in the binary data.  */

/* Imagine you're receiving binary data that represents a simple file format. This hypothetical format contains:
    - A header with two unsigned 8-bit integers representing width and height.
    - A sequence of pixels, each represented by three unsigned 8-bit integers for red, green, and blue values.
We'll use a Uint8Array (a kind of TypedArray) to handle the raw binary data and a DataView to extract structured data from it. */

// Example binary data (received from source, e.g., WebSocket, AJAX, or file reading)
const binaryData = new Uint8Array([
    10, 20, 255, 0, 0, 0, 255, 0, 0, 0, 255,
]);
// Creating a DataView from the TypedArray
const view = new DataView(binaryData.buffer);

// Extracting header info
const width = view.getUint8(0);
const height = view.getUint8(1);
console.log(`Image Width: ${width}, Height: ${height}`);

// Extracting pixel data
for (let i = 2; i < binaryData.length; i += 3) {
    const r = view.getUint8(i);
    const g = view.getUint8(i + 1);
    const b = view.getUint8(i + 2);
    console.log(`Pixel ${(i - 2) / 3}: R=${r}, G=${g}, B=${b}`);
}

// Modifying the data
view.setUint8(2, 128); // Set the red value of the first pixel to 128

// If this were a real application, you might now send the modified data back,
// or render the pixel data to a canvas, or save it to a file, etc.

/**
 * BUFFER MODULE:
 */

// 1. Buffer.alloc() - Creates a new Buffer of the specified size
const buf1 = Buffer.alloc(10);
console.log(buf1);

// 2. Buffer.from() - Creates a new Buffer from an array, string, buffer, or other data
const buf2 = Buffer.from([1, 2, 3]);
const buf3 = Buffer.from("Hello, World!", "utf-8"); // 'utf-8' is default and can be omitted
console.log(buf2);
console.log(buf3);

// 3. buffer.length - Returns the size of the buffer in bytes
console.log(`buf3 length: ${buf3.length} bytes`);

// 4. buffer.toString() - Converts the buffer content to a string
console.log(buf3.toString());

// 5. buffer.fill() - Fills the buffer with the specified value
buf1.fill(0);
console.log(buf1);

// 7. buffer.compare() - Compares buffer contents
const result = Buffer.compare(buf2, buf1);
console.log(`Comparison Result: ${result}`);

// 8. buffer.copy() - Copies data from a source buffer to a target buffer
const targetBuffer = Buffer.alloc(5);
buf3.copy(targetBuffer, 0, 0, 5);
console.log(targetBuffer.toString());

// 9. buffer.concat() - Combines a list of buffers into a single buffer
const combinedBuffer = Buffer.concat([buf2, buf3]);
console.log(combinedBuffer.toString());

// 10. buffer.equals() - Determines if two buffers have the same content
const isEqual = buf2.equals(buf1);
console.log(`Buffers are equal: ${isEqual}`);

const buf4 = Buffer.alloc(10);
buf4.write("test");
console.log(buf4.toString()); // 'test'

const buf5 = Buffer.from([0x12, 0x34, 0x56, 0x78]);
const value = buf5.readUInt16BE(1);
console.log(value); // 13398

const buf6 = Buffer.alloc(4);
buf6.writeUInt16BE(13398, 1); // <Buffer 00 34 56 00>
console.log(buf6); //

const buf7 = Buffer.from("test");
console.log(Buffer.isBuffer(buf7)); // true
console.log(Buffer.isBuffer("test")); // false

const buf8 = Buffer.from("Hello, World!");
const position = buf8.indexOf("World");
console.log(position); // 7

const buf9 = Buffer.from("Hello, World!");
const includes = buf9.includes("World");
console.log(includes); // true
