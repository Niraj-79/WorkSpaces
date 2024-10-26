// External Module
const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.send(`
      <h1> Register your home here:</h1>
      <form action="/host/add-home" method="POST">
        <input type="text"name="houseName" placeholder="Enter the name of your house" />
        <input type="Submit" />
      </form>
      `);
});

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.send(`
      <h1>Home Registered successfully</h1>
      <a href="/">Go to Home</a>
      `);
});

module.exports = hostRouter;
