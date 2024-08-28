const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const Admin = require('../models/adminDetails');
const Contact = require('../models/contactDetails');

//admin login
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

//register new admin
exports.registerAdmin = async (req, res) => {
    try {
        const { firstname, lastname, email, password, confirmPassword, gender, birthdate, address, phone } = req.body;

        const existingAdmin = await Admin.findOne({ $or: [{ email }, { phone }] });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin with this email or phone number already exists" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new admin
        const newAdmin = new Admin({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            gender,
            birthdate,
            address,
            phone,
        });

        await newAdmin.save();
        res.status(201).json({ message: "Admin created successfully", admin: newAdmin });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all admins
exports.getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//update admin
exports.updateAdmin = async (req, res) => {
    try {
        const { firstname, lastname, email, password, confirmPassword, gender, birthdate, address, phone } = req.body;

        if (password && password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const admin = await Admin.findByIdAndUpdate(req.params.id, { firstname, lastname, email, password, confirmPassword, gender, birthdate, address, phone }, { new: true });
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        res.status(200).json({ message: "Admin updated successfully", admin });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// delete admin
exports.deleteAdmin = async (req, res) => {
    try {
        const admin = await Admin.findByIdAndDelete(req.params.id);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        res.status(200).json({ message: "Admin deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//save contact details
exports.submitContactForm = async (req, res) => {
    const { email, subject, message } = req.body;

    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Create a new contact entry
        const contact = new Contact({
            email,
            subject,
            message,
        });

        await contact.save();

        return res.status(201).json({ message: "Contact form submitted successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

//get contact details
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        return res.status(200).json(contacts);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

// delete a contact
exports.deleteContact = async (req, res) => {
    try {
        const { id } = req.params;  // Get the id from the route parameters
        const deletedContact = await Contact.findByIdAndDelete(id);

        if (!deletedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }

        return res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

//mark as read
exports.updateReadStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { read } = req.body;

        const updatedContact = await Contact.findByIdAndUpdate(id, { read }, { new: true });

        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        return res.status(200).json(updatedContact);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};