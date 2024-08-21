const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const Admin = require('../models/adminDetails');

exports.getAdmin = async (req, res) => {
    const { email, password } = req.body;

    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Find the admin by email
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Compare the password with bcrypt
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate a JWT token valid for 24 hours
        const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
            expiresIn: '24h',
        });

        // Send response with JWT token
        return res.status(200).json({
            message: "Login successful",
            token,
            admin: {
                id: admin._id,
                email: admin.email,
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};