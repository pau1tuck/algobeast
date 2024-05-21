import net from "net";

const server = net.createServer(socket => {
    socket.write("");
    socket.on("data", data => {});
    socket.end();
});

server.listen(8000, () => {});
server.getConnections((error, count) => {}); // count = active connections
server.close(() => {});
server.address(); // IP address

const client = net.createConnection({ port: 8000 }, () => {
    client.write("");
});

client.on("data", data => {});
client.end(); // half-closes the socket
client.setTimeout(3000); // sets a timeout period
client.remoteAddress; // IP address

net.isIP("0.0.0.1"); // 0 or 4 or 6
net.isIPv4("0.0.0.1"); // boolean
net.isIPv6("123.123.123.123"); // boolean
