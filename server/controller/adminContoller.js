const router = require("express").Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

//admin login
exports.getAllSales = (req, res) => {
    res.send('Return all sales');
};