const http = require("http");
const { URLSearchParams } = require("url");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
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
    req.method == "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);

      /*
      const bodyObject = {};
      for (const [key, val] of params.entries()) {
        bodyObject[key] = val;
      }
      */
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
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