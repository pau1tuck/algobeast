import * as http from "http";
import * as fs from "fs";

const server: http.Server = http.createServer((req, res) => {
  // Handling different HTTP methods and URLs
  if (req.method === "GET") {
    if (req.url === "/") {
      // Serving the index.html file
      fs.readFile("index.html", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/html" });
          res.write("<h1>Internal Server Error</h1>");
          res.end();
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      });
    } else if (req.url === "/about") {
      // Serving the about page
      fs.readFile("about.html", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/html" });
          res.write("<h1>Internal Server Error</h1>");
          res.end();
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      });
    } else {
      // Handling unknown URLs
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>404 Not Found</h1>");
      res.end();
    }
  } else {
    // Handling unsupported HTTP methods
    res.writeHead(405, { "Content-Type": "text/html" });
    res.write("<h1>405 Method Not Allowed</h1>");
    res.end();
  }
});

// Event: 'request'
server.on("request", (req, res) => {
  console.log("Request received. URL:", req.url);
});

// Event: 'connection'
server.on("connection", (socket) => {
  console.log("New connection established. Remote Address:", socket.remoteAddress);
});

// Event: 'close'
server.on("close", () => {
  console.log("Server closed.");
});

// Listening on specific IP and port
server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on http://127.0.0.1:3000");
});
