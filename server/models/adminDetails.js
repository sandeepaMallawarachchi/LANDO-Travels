const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    adminID: {
        type: String,
        required: true,
        unique: true,
        default: () => `admin_${new Date().getTime()}`,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female'],
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },

    resetCode: {
        type: Number,
        required: false
    },
    resetCodeExpires: {
        type: Date,
        required: false
    },
    role: {
        type: String,
        required: true,
        enum: ['owner', 'editor'],
    },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;