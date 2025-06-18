const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const adminController = require("../controller/adminContoller");
const authMiddleware = require("../middlewares/authMiddleware");
const { getActiveUserCount } = require("../middlewares/trafficTracker");

// Login route
router.post("/login", adminController.getAdmin);

router.get("/dashboard", authMiddleware, (req, res) => {
  res.send("Welcome to admin dashboard");
});

//register route
router.post("/register", adminController.registerAdmin);

//all admin route
router.get("/getAll", adminController.getAllAdmins);

//admin route
router.get("/getAdmin/:adminID", adminController.getAdminById);

//update route
router.put("/update/:adminID", adminController.updateAdmin);

//delete route
router.delete("/delete/:adminID", adminController.deleteAdmin);

//contact routes
router.post(
  "/contact",
  [
    body("email").isEmail(),
    body("subject").notEmpty(),
    body("message").notEmpty(),
  ],
  adminController.submitContactForm
);

router.get("/contacts", adminController.getAllContacts);

router.delete("/contacts/:id", adminController.deleteContact);

router.patch("/contacts/:id", adminController.updateReadStatus);

// Logout route
router.post("/logout", adminController.logout);

// Get all cards
router.get("/getcards", adminController.getAllCards);

// Create a new card
router.post("/createCard", adminController.createCard);

// Update a card route
router.put("/cards/:id", adminController.updateCard);

// Delete a card route
router.delete("/cards/:id", adminController.deleteCard);

//send password reset email route
router.post("/passwordEmail", adminController.requestPasswordReset);

//reset the password route
router.post("/passwordReset", adminController.resetPassword);

//current online users
router.get("/online-users", (req, res) => {
  res.json({ count: getActiveUserCount() });
});

module.exports = router;
