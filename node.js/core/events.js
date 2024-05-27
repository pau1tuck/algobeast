import EventEmitter from "node:events";
const events = require("node:events");

logger.on("request", url => {
    console.log(`Request made to: ${url}`);
});
logger.on("error", errorMessage => {
    console.error(`Error encountered: ${errorMessage}`);
});
// Server
const server = http.createServer(
    (req, res,) => logger.emit("request", req.url),
); // `request` event

// Endpoint event emit
if (req.url === "/cause-error") {
    logger.emit("error", "Intentional error triggered!"); // EMIT
    res.writeHead(500);
    res.end("Intentional error");
} else {
    res.writeHead(200);
    res.end("Hello, World!");
}

server.listen(3000, () => {
    console.log("Server running on port 3000");
});

const myEmitter = new EventEmitter();

myEmitter.on("sayHello", () => {
    // ON
    console.log("Hello, world!");
});

myEmitter.emit("sayHello"); // EMIT

myEmitter.on("greet", name => {
    // EMIT
    console.log(`Hello, ${name}!`);
});

myEmitter.emit("greet", "Alice"); // EMIT

// Add a once listener (fired only once):
myEmitter.once("singleGreet", () => {
    // ONCE
    // ONCE
    console.log("This greeting is shown only once.");
});

myEmitter.emit("singleGreet"); // EMIT
myEmitter.emit("singleGreet"); // Does not trigger.

myEmitter.on("farewell", farewell); // ON
myEmitter.emit("farewell");
myEmitter.removeListener("farewell", farewell); // REMOVE_LISTENER
myEmitter.emit("farewell"); // Does not trigger.

const farewell = () => {
    console.log("Goodbye!"); // Removes listener.
};

// Return number of listeners on an event.
console.log(myEmitter.listenerCount("sayHello")); // LISTENER_COUNT

// Return an array of listeners on an event.
const listeners = myEmitter.listeners("greet"); // LISTENERS
console.log(listeners);

// Rmoving all listeners for a specific event.
myEmitter.removeAllListeners("greet"); // REMOVE_ALL_LISTENERS
myEmitter.emit("greet", "Bob");

// Setting the maximum number of listeners.
myEmitter.setMaxListeners(10); // SET_MAX_LISTENERS

// Getting the maximum number of listeners.
const maxListeners = myEmitter.getMaxListeners(); // GET_MAX_LISTENERS
console.log(maxListeners);

// It's best practice to listen for 'error' events.
myEmitter.on("error", err => {
    console.error("An error occurred:", err);
});

myEmitter.emit("error", new Error("Oops! Something went wrong."));

/*** REALWORLD EXAMPLE: ***/

const { EventEmitter } = require("events");

// Create a class that extends EventEmitter to represent a chat room
class ChatRoom extends EventEmitter {
    constructor() {
        super();
        this.users = [];
    }

    addUser(username) {
        if (this.users.includes(username)) {
            this.emit("error", new Error("Username already exists."));
        } else {
            this.users.push(username);
            this.emit("userJoined", username);
        }
    }

    removeUser(username) {
        const index = this.users.indexOf(username);
        if (index !== -1) {
            this.users.splice(index, 1);
            this.emit("userLeft", username);
        } else {
            this.emit("error", new Error("User not found."));
        }
    }

    sendMessage(sender, message) {
        if (!this.users.includes(sender)) {
            this.emit("error", new Error("Sender not in chat room."));
        } else {
            this.emit("message", { sender, message });
        }
    }
}

const chatRoom = new ChatRoom();

chatRoom.on("userJoined", username => {
    console.log(`${username} joined the chat room.`);
});

chatRoom.on("userLeft", username => {
    console.log(`${username} left the chat room.`);
});

chatRoom.on("message", data => {
    console.log(`${data.sender}: ${data.message}`);
});

chatRoom.on("error", error => {
    console.error("Chat Error:", error.message);
});

chatRoom.addUser("Alice");
chatRoom.addUser("Bob");
chatRoom.sendMessage("Alice", "Hi Bob!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.removeUser("Alice");
chatRoom.sendMessage("Alice", "This should fail.");
