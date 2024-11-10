// Core Module
// const path = require('path');

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
// const rootDir = require("../utils/pathUtil");
const homeController = require('../controllers/homes');

hostRouter.get("/add-home", homeController.getHome);
hostRouter.post("/add-home", homeController.postAddHome);

exports.hostRouter = hostRouter;
