const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    _id: String,
    used: {
        type: Boolean,
        required: true,
        default: false
    }
});

const RefreshToken = mongoose.model("RefreshToken", Schema);

module.exports = RefreshToken;