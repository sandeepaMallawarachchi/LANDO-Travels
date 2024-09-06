const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const Admin = require("../models/adminDetails");
const Contact = require("../models/contactDetails");
const Card = require("../models/Card");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

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
      expiresIn: "24h",
    });

    // Send response with JWT token
    return res.status(200).json({
      message: "Login successful",
      token,
      admin: {
        adminID: admin.adminID,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

//get admin by id
exports.getAdminById = async (req, res) => {
  const { adminID } = req.params;

  try {
    const admin = await Admin.findOne({ adminID });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json(admin);
  } catch (error) {
    console.error("Error fetching admin details:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

//register new admin
exports.registerAdmin = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      gender,
      address,
      phone,
      role,
    } = req.body;

    const existingAdmin = await Admin.findOne({ $or: [{ email }, { phone }] });
    if (existingAdmin) {
      return res.status(400).json({
        message: "Admin with this email or phone number already exists",
      });
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
      address,
      phone,
      role,
    });

    await newAdmin.save();
    res
      .status(201)
      .json({ message: "Admin created successfully", admin: newAdmin });
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
    const { email, address, phone } = req.body;

    const admin = await Admin.findOneAndUpdate(
      { adminID: req.params.adminID },
      {
        email,
        address,
        phone,
      },
      { new: true }
    );

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
    // Use req.params.adminID to get the adminID from the URL
    const admin = await Admin.findOneAndDelete({ adminID: req.params.adminID });

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

    return res
      .status(201)
      .json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

//get contact details
exports.getAllContacts = async (req, res) => {
  try {
    // Sort by _id in descending order to get the latest records first
    const contacts = await Contact.find().sort({ _id: -1 });
    return res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// delete a contact
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params; // Get the id from the route parameters
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

    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { read },
      { new: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    return res.status(200).json(updatedContact);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

exports.logout = (req, res) => {
  // Assuming no session or token invalidation on server-side
  return res.status(200).json({ message: "Logout successful" });
};

// Get all cards
exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new card
exports.createCard = async (req, res) => {
  const { src, title, description } = req.body;
  try {
    const newCard = new Card({ src, title, description });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a card
exports.updateCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(card);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a card
exports.deleteCard = async (req, res) => {
  try {
    await Card.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//send password reset email
exports.requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;

    // Find admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Generate a random 6-digit code
    const resetCode = crypto.randomInt(100000, 999999);

    // Save the reset code and its expiration time
    admin.resetCode = resetCode;
    admin.resetCodeExpires = Date.now() + 15 * 60 * 1000;
    await admin.save();

    // Send the reset code via email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Request",
      text: `Your password reset code is ${resetCode}. It will expire in 15 minutes.`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Reset code sent to email" });
  } catch (error) {
    console.error("Error requesting password reset:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

//reset password
exports.resetPassword = async (req, res) => {
  try {
    const { resetCode, newPassword } = req.body;

    // Find admin by reset code
    const admin = await Admin.findOne({ resetCode });
    if (!admin) {
      return res.status(404).json({ message: "Invalid reset code" });
    }

    // Check if the reset code is not expired
    if (admin.resetCodeExpires < Date.now()) {
      return res.status(400).json({ message: "Reset code has expired" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the password
    admin.password = hashedPassword;
    admin.resetCode = undefined;
    admin.resetCodeExpires = undefined;
    await admin.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error resetting password:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
