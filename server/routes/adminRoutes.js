const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const adminController = require("../controller/adminContoller");
const authMiddleware = require("../middlewares/authMiddleware");

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
router.post("/delete", adminController.deleteAdmin);

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

// Get all cards route
router.get("/cards", adminController.getAllCards);

// Create a new card route
router.post("/cards", adminController.createCard);

// Update a card route
router.put("/cards/:id", adminController.updateCard);

// Delete a card route
router.delete("/cards/:id", adminController.deleteCard);

//send password reset email route
router.post('/passwordEmail', adminController.requestPasswordReset);

//reset the password route
router.post('/passwordReset', adminController.resetPassword);

module.exports = router;
