// Simple Node.js server

/*
const http = require("http");
function requestListener(req, res) {
  console.log(req);
}
http.createServer(requestListener);
*/

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
