import { EventEmitter } from "events";
import cors from "cors";
import express, { Request, Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // For parsing application/json in POST requests

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "127.0.0.1:3000",
    },
});

// Mapping of socket IDs to usernames
const users = new Map();

class ChatRoom extends EventEmitter {
    constructor() {
        super();
    }

    userJoined(username: string) {
        this.emit("userJoined", username);
    }

    messageSent(message: any) {
        this.emit("messageSent", message);
    }

    userLeft(username: string) {
        this.emit("userLeft", username);
    }
}

const chatroom = new ChatRoom();

chatroom.on("userJoined", username => {
    console.log(
        `User ${username} joined the chat via Event Emitter.`,
    );
});

chatroom.on("messageSent", message => {
    console.log(
        `Message sent via Event Emitter: ${JSON.stringify(message)}`,
    );
});

chatroom.on("userLeft", username => {
    console.log(`${username} left the chat via Event Emitter.`);
});

/*** API Routes ***/

// 1. Fetch the list of connected users
app.get("/users", (req: Request, res: Response) => {
    const connectedUsers = [...users.values()];
    res.json(connectedUsers);
});

// 2. Get the last login time for a specific user
// This is just a dummy route for the demonstration since the User class isn't integrated with a database
app.get(
    "/users/:username/lastLogin",
    (req: Request, res: Response) => {
        const { username } = req.params;
        // You might fetch this from a database in a real application
        // For now, we're assuming the user is always connected
        if (users.has(username)) {
            res.json({ lastLogin: new Date().toISOString() }); // Return current time for demo
        } else {
            res.status(404).json({ error: "User not found" });
        }
    },
);

// 3. Send a new message (for demonstration purposes)
app.post("/message", (req: Request, res: Response) => {
    const message = req.body;
    // Validate and process the message
    // This is a demonstration, so we're not really processing the message further
    res.json({ status: "Message received", message });
});

io.on("connection", socket => {
    console.log("User connected.");

    socket.on("userJoined", username => {
        if (typeof username !== "string" || username.trim() === "") {
            return socket.emit("error", "Invalid username.");
        }

        // Store the username with the connection
        users.set(socket.id, username);
        chatroom.userJoined(username); // Emit event
    });

    socket.on("messageSent", message => {
        if (!users.has(socket.id)) {
            return socket.emit(
                "error",
                "You must join the chat before sending a message.",
            );
        }

        const recipientSocketId = [...users.entries()]
            .filter(
                ([socketId, username]) =>
                    username === message.recipient,
            )
            .map(([socketId, username]) => socketId)[0];

        if (!recipientSocketId) {
            return socket.emit(
                "error",
                `Recipient ${message.recipient} is not connected.`,
            );
        }

        chatroom.messageSent(message); // Emit event
        socket.to(recipientSocketId).emit("messageReceived", message);
    });

    socket.on("disconnect", () => {
        const username = users.get(socket.id);
        if (username) {
            chatroom.userLeft(username); // Emit event
            users.delete(socket.id);
        }
    });
});

httpServer.listen(5000, () => {
    console.log("Server running on port 5000.");
});

/*** USER CLASS ***/

class User {
    private _id: string;
    private _username: string;
    private _lastLogin: Date;

    // Constructor
    constructor(id: string, username: string, lastLogin: Date) {
        this._id = id;
        this._username = username;
        this._lastLogin = lastLogin;
    }

    // Getter methods
    get id(): string {
        return this._id;
    }

    get username(): string {
        return this._username;
    }

    get lastLogin(): Date {
        return this._lastLogin;
    }

    // Setter methods
    set username(username: string) {
        this._username = username;
    }

    set lastLogin(lastLogin: Date) {
        this._lastLogin = lastLogin;
    }

    // Instance method
    login() {
        this._lastLogin = new Date();
        console.log(`User ${this._username} has logged in.`);
    }

    // Static method
    static fromJSON(json: any): User {
        return new User(
            json._id,
            json._username,
            new Date(json._lastLogin),
        );
    }
}
