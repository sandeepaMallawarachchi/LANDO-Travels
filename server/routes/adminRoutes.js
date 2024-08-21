const express = require('express');
const { getAdmin } = require('../controller/adminContoller');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Login route
router.post('/login', getAdmin);

// Example of a protected route
router.get('/dashboard', authMiddleware, (req, res) => {
    res.send('Welcome to admin dashboard');
});

module.exports = router;