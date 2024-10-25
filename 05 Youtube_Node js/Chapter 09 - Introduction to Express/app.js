// External Module
const express = require("express");

// Local Module
const userRequestHandler = require("./user");

const app = express();

app.get("/", (req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  // res.send("<p>Came from First Middleware</p>");
  next();
});

app.post("/submit-details", (req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<p>Welcome to Complete Coding Nodejs series </p>");
});

app.use("/", (req, res, next) => {
  console.log("Came in another middleware", req.url, req.method);
  res.send("<p>Came in another Middleware</p>");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
