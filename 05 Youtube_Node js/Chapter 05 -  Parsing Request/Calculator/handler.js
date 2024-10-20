const { sumRequestHandler } = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
        <title>Practise Set </title>  
          </head>    
        <body><h1>Welcome to the Calculator</h1></body>   
        <a href="/calculate">Go to Calculator</a>         
      </html>
      `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculate") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
        <title>Practise Set </title>  
          </head>    
        <body><h1>Here is the Calculator</h1>  
        <form action="/calculate-result" method="POST">
        <input type="text" id="input1" placeholder="First Num" name="first" />
        <input type="text" id="input1" placeholder="Second Num" name="second" />
        <input type="submit" value="sum" />
        </form>  
        </body> 
      </html>
      `);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    return sumRequestHandler(req, res);
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head>
      <title>Practise Set </title>  
        </head>    
        <h1>404 Page Not Found</h1>      
        <a href="/">Go to Home</a>
    </html>
    `);
  return res.end();
};

exports.requestHandler = requestHandler;
