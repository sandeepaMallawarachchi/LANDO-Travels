const mongoose = require('mongoose');
require('dotenv').config();

// uri in the .env file
const uri = process.env.URI;

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        if (process.env.NODE_ENV !== 'deployment') {
            console.log('Database connection success');
        }
    } catch (err) {
        // Throw an error if the connection fails
        res.status(404).send('Database connection error: ' + err.message);
    }
};

module.exports = connectDB;