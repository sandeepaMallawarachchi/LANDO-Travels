const express = require('express');
const cors = require('cors');
const dbConnection = require('./database/dbConnection');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//import routes
const adminRouter = require('./routes/adminRoutes')

//use routes
app.use('/admin', adminRouter);

//db connection
dbConnection();

if (process.env.NODE_ENV !== 'deployment') {
    app.listen(port, () => console.log(`Listening on port ${port}`));
}