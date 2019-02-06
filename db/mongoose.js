const mongoose = require("mongoose");

require("../models/user.model");

mongoose.connect("mongodb://localhost:27017/chat",
    {useNewUrlParser: true },
    (error, test) => {
    if(error) {
        process.exit(1);
    }
    console.log("--Database connection successfully");
    });

mongoose.set("debug", true);

module.exports = mongoose;