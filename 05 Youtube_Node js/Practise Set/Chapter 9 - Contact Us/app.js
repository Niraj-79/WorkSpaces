// External Module
const express = require("express");

const app = express();

// First Middleware
app.use((req, res, next) => {
  console.log("First Dummy Middleware", req.url, req.method);
  next();
});

// Second Middleware
app.use((req, res, next) => {
  console.log("Second Dummy Middleware", req.url, req.method);
  next();
});

// // Third Middleware
// app.use((req, res, next) => {
//   console.log("Third Dummy Middleware", req.url, req.method);
//   res.send("<h>Welcom to Complete Coding</h>");
// });

app.get("/", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(`<h1>Welcome to Complete Coding</h1>`);
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send(
    `<h1>Please give your details here</h1>
    <form action="/contact-us" method="POST">
        <input type="text" name="name" placeholder="Enter your name"/>
        <input type="email" name="email" placeholder="Enter your email" />
        <input type="submit" />
    </form>       
    `
  );
});

app.use("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method);
  res.send(`<h1>We Will contact you shortly</h1>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
