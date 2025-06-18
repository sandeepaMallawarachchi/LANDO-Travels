const express = require('express');
const cors = require('cors');
const dbConnection = require('../database/dbConnection');
const { trackOnlineUsers } = require("../middlewares/trafficTracker");

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(trackOnlineUsers);

// Import routes
const adminRouter = require('../routes/adminRoutes');

// Use routes
app.use('/admin', adminRouter);

// DB connection
dbConnection();

//export app for vercel
module.exports = app;