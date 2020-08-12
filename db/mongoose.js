const mongoose = require("mongoose");

require("../models/user.model");

mongoose.connect("mongodb://localhost:27017/chat",
    {
		useNewUrlParser: true,
	useUnifiedTopology: false,
 server: {
    socketOptions: {
      socketTimeoutMS: 0,
      connectTimeoutMS: 0
    }
  }	
  },
    (error, test) => {
    if(error) {
		console.log(error);
        process.exit(1);
    }
    console.log("--Database connection successfully");
    });

mongoose.set("debug", true);

module.exports = mongoose;