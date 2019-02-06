const mongoose = require("mongoose");
const moment = require("moment");

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdDay: {
        type: String,
        value: moment()
    },
    users: []
});

const project = mongoose.model("project", Schema);

module.exports = project;