http.createServer((req, res) => {
    res.write("Hello World!");
    res.end();
}); // Creates a new server that responds with 'Hello World!' for every request.

http.get("http://www.google.com", res => {
    console.log(res.statusCode);
}); // Sends a GET request to www.google.com and logs the status code of the response.

/*** http.SERVER ****/
let server = http.Server(); // Creates a new server instance.

server.close(); // Stops the server from accepting new connections.
server.listen(8000); // Starts the server on port 8000.

server.on("request", (req, res) => {
    console.log("Received request");
}); // Listens for 'request' event and logs a message when it occurs.

server.on("close", () => {
    console.log("Server closed");
}); // Listens for 'close' event and logs a message when it occurs.

/*** http.REQUEST ***/
http.request(
    {
        hostname: "www.google.com",
        port: 80,
        path: "/",
        method: "GET",
    },
    res => {
        console.log(res.statusCode);
    },
).end(); // Sends a GET request to www.google.com and logs the status code of the response.

let request = http.request({
    hostname: "www.google.com",
    port: 80,
    path: "/",
    method: "POST",
}); // Creates a new client request.

request.abort(); // Aborts the request.
request.end(); // Signals that all of the request headers and body have been sent.
request.write("Hello World!"); // Sends 'Hello World!' as a part of the request body.

request.setTimeout(3000, () => {
    console.log("Request timed out");
});

http.STATUS_CODES[200]; // Logs the message for the status code 200.

/** http.INCOMING_REQUEST */
let req = http.IncomingMessage; // Reference to the http.IncomingMessage object.
req.headers; // Logs the headers of the request.

import http from "http";

// 1. Create an HTTP Server
const server2 = http.createServer((req, res) => {
    // Handle the request here
    res.writeHead(200, { "Content-Type": "text/plain" }); // Set HTTP response headers
    res.end("Hello, World!"); // End the response and send data
});

// Start the server listening on port 8080
server2.listen(8080, () => {
    console.log("Server running at http://localhost:8080/");
});

// 2. HTTP GET request (client-side)
http.get("http://www.example.com", res => {
    let data = "";

    // A chunk of data has been received.
    res.on("data", chunk => {
        data += chunk;
    });

    // The whole response has been received.
    res.on("end", () => {
        console.log(data);
    });
}).on("error", err => {
    console.log("Error: " + err.message);
});

// 3. Generic HTTP request (client-side)
const options = {
    hostname: "www.example.com",
    port: 80,
    path: "/path",
    method: "GET",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
};

const req2 = http.request(options, res => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

    res.setEncoding("utf8");
    res.on("data", chunk => {
        console.log(`BODY: ${chunk}`);
    });
    res.on("end", () => {
        console.log("No more data in response.");
    });
});

req2.on("error", e => {
    console.error(`problem with request: ${e.message}`);
});

// Write data to the request body, if needed (e.g., for POST requests)
// req.write('data\n');
// req.write('data\n');
req2.end();

// 4. Close the server
// This is useful in scenarios like testing where you want to start, use, and then stop an HTTP server.
// server.close(() => {
//     console.log('Server closed!');
// });
