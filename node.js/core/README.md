# Node.js Core Modules

## [**`http`**](http.js)

The `http` module in Node.js is an integral component that facilitates the transmission of data over the Hyper Text Transfer Protocol (HTTP). This module provides numerous methods that allow for the creation of HTTP servers and clients. It permits developers to listen for, and respond to, HTTP requests while providing control over request methods, headers, and the body of messages. Consequently, the `http` module forms the backbone of data exchange over the internet in Node.js applications, playing a pivotal role in the development of web servers and RESTful APIs.

## [**`fs`**](fs.md)

`fs` module: The `fs` module, which stands for "file system", is another core module in Node.js. It provides an extensive range of functions that enable interaction with the file system on a computer. This module allows for the reading, writing, updating, and deletion of files, offering both synchronous and asynchronous operations. It enables developers to handle data persistently by saving and retrieving it to and from files. Moreover, it offers the ability to manipulate directories, inspect file stats, and monitor file changes, making the `fs` module a key player in data handling and storage in Node.js applications.

## [**`path`** and **`os`**](path-os.md)

The `path` module in Node.js provides utilities for working with file and directory paths. It offers various functionalities for parsing and manipulating path strings, such as extracting file names, directory names, or file extensions, and resolving or normalizing path strings. The `os` module, on the other hand, provides utilities for interacting with the operating system. This includes fetching information about the system's CPU architecture, platform, and memory usage, as well as user information and system uptime. Both modules are key for applications that require interaction with the file system or the operating system.

## [**`process`**](process.md)

`process` module: The `process` module in Node.js provides utilities to interact with the current Node.js process. It has properties and methods that give access to aspects like command-line arguments, environment variables, process id, and the status of the process. It also provides the ability to listen to process events, such as when the process is about to exit, or when an uncaught exception occurs. The `process` module is essential for managing the runtime behavior of a Node.js application.

## [**`events`**](events.md)

The `events` module in Node.js is pivotal for building event-driven applications. It provides the `EventEmitter` class, which is used to raise and handle custom events. Instances of `EventEmitter` emit events that can be listened to and acted upon, allowing for asynchronous communication and facilitating the development of loosely coupled systems. This module is crucial for creating scalable and maintainable Node.js applications.

## [**`crypto`**](crypto.md)

`crypto` module: The `crypto` module in Node.js provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions. It is used to handle tasks such as encrypting data, creating unique identifiers, generating hashes, and managing passwords. The `crypto` module plays a vital role in securing data and implementing authentication and integrity checks in a Node.js application.
