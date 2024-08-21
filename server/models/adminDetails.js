const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({

    adminID: {
        type: String,
        required: true,
        unique: true,
    },

    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        unique: true,
    },

    dateOfBirth: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
    },

    phone: {
        type: Number,
        required: true,
        unique: true,
    },

    address: {
        type: String,
        required: true
    },

    role: {
        type: String,
        default: "owner"
    }
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;