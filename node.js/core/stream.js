import { Readable, Writable, Duplex, Transform, pipeline } from 'node:stream';

/*
The `stream` module provides the basis for working with streaming data in Node.js. Streams
can be readable, writable, or both (duplex). They allow for processing large amounts of
data efficiently without the need to store it all in memory.
*/

// Simple readable stream
const readableStream = new Readable({
  read(size) {
    // Produce data here or push data from other sources
    this.push('data');
    this.push(null); // Indicates the end of data
  }
});

readableStream.on('data', (chunk) => {
  console.log('Received data:', chunk.toString());
});

// Simple writable stream
const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log('Writing:', chunk.toString());
    callback(); // Signal that the write operation is complete
  }
});

readableStream.pipe(writableStream); // This will transfer data from the readable stream to the writable stream

// Duplex stream (both readable and writable)
const duplexStream = new Duplex({
  read(size) {
    // Produce data here
    this.push('duplex data');
    this.push(null);
  },
  write(chunk, encoding, callback) {
    console.log('Duplex received:', chunk.toString());
    callback();
  }
});

// Transform stream (a type of duplex stream that can modify or transform the data as it's written and read)
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());  // Convert all data to uppercase
    callback();
  }
});

readableStream.pipe(transformStream).pipe(writableStream);  // Data will be transformed to uppercase before being written

// The pipeline function provides a way to pipe a series of streams together and handle any errors that might occur.
pipeline(
  readableStream,
  transformStream,
  writableStream,
  (err) => {
    if (err) {
      console.error('Pipeline failed:', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  }
);

// Note: Streams are essential in Node.js applications, especially when dealing with I/O-bound operations
// like file handling or network requests. They make it possible to process data as soon as it's available,
// without waiting for the entire data load.
