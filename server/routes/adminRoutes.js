const express = require("express");
const router = express.Router();
const { body } = require('express-validator');
const adminController = require("../controller/adminContoller");
const authMiddleware = require('../middlewares/authMiddleware');

// Login route
router.post('/login', adminController.getAdmin);

router.get('/dashboard', authMiddleware, (req, res) => {
    res.send('Welcome to admin dashboard');
});

//contact routes
router.post('/contact', [
    body('email').isEmail(),
    body('subject').notEmpty(),
    body('message').notEmpty(),
], adminController.submitContactForm);

router.get('/contacts', adminController.getAllContacts);

module.exports = router;
