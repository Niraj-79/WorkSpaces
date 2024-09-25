// Simple Node.js server

/*
const http = require("http");
function requestListener(req, res) {
  console.log(req);
}
http.createServer(requestListener);
*/

/*
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complet Coding</title></head>");
  res.write("<body><h1>Like / Share / Subscribe</h1></body>");
  res.write("</html>");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
*/

const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complet Coding</title></head>");
    res.write("<body><h1>Welcome to Home</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complet Coding</title></head>");
    res.write("<body><h1>Welcome to Products Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complet Coding</title></head>");
    res.write("<body><h1>This Page is About Us</h1></body>");
    res.write("</html>");
    return res.end;
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complet Coding</title></head>");
  res.write("<body><h1>Like / Share / Subscribe</h1></body>");
  res.write("</html>");
  return res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
