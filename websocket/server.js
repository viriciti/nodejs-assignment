const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 9898 });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log("received: %s", message);
    ws.send("Server received the message.");
  });

  ws.send("Connected to the server");
});
