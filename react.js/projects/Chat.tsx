import React, { useState, useEffect } from "react";
import io from "socket.io-client";

/*** CHAT.tsx ***/
const socket = io("http://127.0.0.1:5000");

interface ChatProps {
    username: string;
}

export const Chat: React.FC<ChatProps> = ({ username }) => {
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        socket.emit("userJoined", username);
        socket.on("messageReceived", (msg: any) => {
            setMessages(prev => [
                ...prev,
                `${msg.sender}: ${msg.content}`,
            ]);
        });
    }, [username]);

    const handleSendMessage = () => {
        if (message) {
            // Sending the message to the server
            socket.emit("messageSent", {
                sender: username,
                content: message,
                recipient: "general", // for now we will broadcast it to everyone. Adjust this for specific user messaging.
            });
            setMessage("");
        }
    };
    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
            ></textarea>
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

/*** APP.tsx ***/
export const App: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [isJoined, setIsJoined] = useState<boolean>(false);

    const handleJoin = () => {
        if (username) {
            setIsJoined(true);
            // Here you might send a request to the server to notify that this user has joined
        }
    };

    return (
        <div>
            {!isJoined ? (
                <div>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <button onClick={handleJoin}>Join</button>
                </div>
            ) : (
                <Chat username={username} />
            )}
        </div>
    );
};
