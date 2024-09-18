const express = require('express');
const mongoose = require('mongoose');
const { router } = require('./routes');

require("dotenv").config();

const PORT = process.env.PORT;
const DATABASE_URL = process.env.MONGODB_URL;

const app = express();
app.use(express.json());

app.use('/', router);
app.listen(PORT, () => {
    console.log(`App is listening to ${PORT}`);
});

const dbConnect = () => {
    // Connecting to the database using the provided URL from the environment variables
    mongoose
        .connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        // If the connection is successful, log a success message
        .then(() => console.log("DB CONNECTION SUCCESS"))
        // If there are issues connecting to the database, log an error message and exit the process
        .catch((err) => {
            console.log(`DB CONNECTION ISSUES`);
            console.error(err.message);
            process.exit(1);
        });
};

dbConnect();