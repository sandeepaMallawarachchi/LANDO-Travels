const express = require('express');
const cors = require('cors');
const dbConnection = require('./database/dbConnection');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Import routes
const adminRouter = require('./routes/adminRoutes');

// Use routes
app.use('/admin', adminRouter);

// DB connection
dbConnection();

// Export the app instead of using app.listen()
module.exports = app;