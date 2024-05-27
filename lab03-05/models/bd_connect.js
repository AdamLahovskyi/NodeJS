const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGO_URL;

if (!url) {
    console.error("MONGO_URL is not defined in the environment variables");
    process.exit(1);
}

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1);
    });
