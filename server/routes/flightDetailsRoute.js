const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const flightDetailsController = require("../controller/flightDetailsController");

router.post("/sendFlightRequest", flightDetailsController.sendFlightRequest);