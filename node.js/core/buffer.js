// Buffer.from() method creates a new Buffer that contains a copy of the provided data.
let bufferOne = Buffer.from("Hello, World!"); // bufferOne.toString() = "Hello, World!"
let bufferFive = Buffer.from("ABC");

let bufferEight = Buffer.alloc(7);
// Buffer.compare() returns a number indicating whether bufferOne comes before, after, or is the same as bufferTwo in sort order.
console.log(Buffer.compare(bufferFive, bufferSix)); // Outputs: -1
let bufferFour = Buffer.concat([bufferTwo, bufferThree]); // returns a new buffer
// Buffer.copy() method copies data from a region of target buffer to a region in the source buffer.
bufferSeven.copy(bufferEight, 0, 0, 7);
buf3.copy(targetBuffer, 0, 0, 5);
// buffer.equals() - Determines if two buffers have the same content
const isEqual = buf2.equals(buf1);
console.log(`Buffers are equal: ${isEqual}`);
const includes = buf9.includes("World"); // true
const position = buf8.indexOf("World");
console.log(bufferOne.length); // Outputs: 13, the amount of memory allocated for the buffer in bytes.
console.log(Buffer.isBuffer(buf7)); // true
console.log(Buffer.isBuffer("test")); // false
// 5. buffer.fill() - Fills the buffer with the specified value
buf1.fill(0);
// Buffer.slice() returns new buffer that references the same memory as the original, offset and cropped by the start and end indices.
let bufferNine = bufferSeven.slice(0, 5);
// Buffer.toString() method reads (decodes) and returns a string from buffer data.
console.log(bufferNine.toString()); // Outputs: Hello
bufferTwo.write("Node.js"); // writes a string to the buffer at a specific offset.

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
const buf5 = Buffer.from([0x12, 0x34, 0x56, 0x78]);
const value = buf5.readUInt16BE(1);
console.log(value); // 13398
const buf6 = Buffer.alloc(4);
buf6.writeUInt16BE(13398, 1); // <Buffer 00 34 56 00>
console.log(buf6); //

