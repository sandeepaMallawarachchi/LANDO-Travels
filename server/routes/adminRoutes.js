const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminContoller");

// Define routes
router.get("/", adminController.getAllAdmin);

module.exports = router;
