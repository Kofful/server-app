const mongoose = require("mongoose");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const RefreshToken = require("./refresh.token.model");
const bcrypt = require("bcrypt");

const Schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    createdDay: {
        type: String,
        value: moment()
    },
    hashPassword: {
        type: String,
        required: true,
        select: false
    },

});
Schema.virtual("password")
    .set(function (password) {
        this.hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    })
    .get(function () {
        return this.hashPassword
    });


Schema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.hashPassword);
};

Schema.methods.generateAccessToken = function () {
    return jwt.sign({uid: this._id, type: "access"}, "myCustomKey", {expiresIn: "2h"});
};

Schema.methods.generateRefreshToken = function () {
    return jwt.sign({uid: this._id, type: "refresh"}, "myCustomKey", {expiresIn: "30d"});
};

Schema.methods.generateTokenPair = function () {
    const accessToken = this.generateAccessToken();
    const refreshToken = this.generateRefreshToken();
    const refresh = new RefreshToken({_id: refreshToken, used: false});
    return refresh.save().then(() => ({accessToken, refreshToken}));
};

const user = mongoose.model("user", Schema);

module.exports = user;