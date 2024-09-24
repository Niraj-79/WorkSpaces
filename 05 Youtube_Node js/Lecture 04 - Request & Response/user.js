const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  const fs = require("fs");

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complet Coding</title></head>");
    res.write("<body><h1>Enter Your Details:</h1></body>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter Your name" /> <br>'
    );
    res.write('<label for ="male">Male<label>');
    res.write('<input type="radio" id="male" name="gender" value="male"/>');
    res.write('<label for ="female">female<label>');
    res.write('<input type="radio" id="female" name="gender" value="female"/>');
    res.write('<input type="submit" value="Submit">');
    res.write("</form>");

    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST") {
      fs.writeFileSync('user.txt', 'Niraj');
      res.statusCode = 302;
      res.setHeader('Location', '/');
    } 

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complet Coding</title></head>");
  res.write("<body><h1>Like / Share / Subscribe</h1></body>");
  res.write("</html>");
  return res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});