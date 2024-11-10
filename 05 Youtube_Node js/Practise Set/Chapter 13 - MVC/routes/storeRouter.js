// Core Modules
const path = require("path");

// External Module
const express = require("express");
const storeRouter = express.Router();

// // Local Module
const homesController = require("../controllers/storeController");

storeRouter.get("/", homesController.getIndex);
storeRouter.get("/homes", homesController.getAddHomes);
storeRouter.get("/bookings", homesController.getBookings);
storeRouter.get("/favourites", homesController.getFavouriteList);

module.exports = storeRouter;
