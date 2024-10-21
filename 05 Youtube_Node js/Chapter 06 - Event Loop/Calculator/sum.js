const sumRequestHandler = (req, res) => {
  console.log("1. In Sum Request Handler", req.url);
  const body = [];
  let result;

  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    console.log("3. End Event Came");
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    // console.log(bodyObj);
    result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);
  });

  req.on("data", (chunk) => {
    body.push(chunk);
    console.log("2. Chunk Came");
  });

  console.log("4. Sending the response");
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head><title>Practise Set </title></head>    
        <h1>Your Sum is ${result} </h1>
    </html>
    `);
  return res.end();
};

exports.sumRequestHandler = sumRequestHandler;
