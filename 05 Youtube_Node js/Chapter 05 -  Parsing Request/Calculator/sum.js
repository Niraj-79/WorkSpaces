const sumRequestHandler = (req, res) => {
  console.log("In Sum Request Handler", req.url);
  const body = [];
  req.on("data", (chunk) => body.push(chunk));
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    // console.log(bodyStr);
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    // console.log(bodyObj);
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Practise Set </title></head>    
          <h1>Your Sum is ${result} </h1>
      </html>
      `);
    return res.end();
  });
};

exports.sumRequestHandler = sumRequestHandler;
