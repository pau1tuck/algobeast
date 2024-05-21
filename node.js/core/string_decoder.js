import { StringDecoder } from 'node:string_decoder';

/*
The `string_decoder` module provides a way to decode Buffer objects into strings. It's
often used with readable streams to ensure that multi-byte characters are not split
inappropriately. It handles character encoding like 'utf8', 'base64', 'latin1', etc.
*/

// Initialize a new decoder instance
const decoder = new StringDecoder('utf8');

// Suppose we receive two buffers as part of a stream:
const buf1 = Buffer.from([0xE2]);
const buf2 = Buffer.from([0x82, 0xAC]);

// Decoding them separately would lead to unexpected results because the sequence represents a single character (€)
console.log('Decoding buf1:', decoder.write(buf1));  // Would result in unexpected output
console.log('Decoding buf2:', decoder.write(buf2));  // Results in '€'

// The StringDecoder handles such cases by maintaining an internal buffer:
const combined = Buffer.concat([buf1, buf2]);
const combinedDecoder = new StringDecoder('utf8');
console.log('Decoding combined:', combinedDecoder.write(combined));  // Correctly results in '€'

// When the stream ends, if there are any remaining bytes in the internal buffer, they will be returned by `end()`.
console.log('End of stream decoding:', combinedDecoder.end());  // Could be a partial character or empty

// Note: In most cases, when working with textual data, the built-in Buffer.toString() method
// provides the required functionality. However, for edge cases, especially when working
// with streams, the `string_decoder` module ensures accurate decoding.
