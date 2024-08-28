const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Make request");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World \n");
});

server.on("connect", () => {
  console.log("Make connection");
});

server.listen(5321, () => {
  console.log("Listening event");
});

console.log("Server running at http://localhost:5321");
