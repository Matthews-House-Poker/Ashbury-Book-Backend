// each file represents a collection in our database
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    gamesPlayed: {
        type: Number,
        required: true,
    },
    firsts: {
        type: Number,
        required: true
    },
    seconds: {
        type: Number,
        required: true
    },
    earnings: {
        type: Number,
        required: true
    },
    debts: {
        type: Array,
        required: true
    },
    senior: {
        type: Boolean,
        required: true
    },
    gains: {
        type: Array,
        required: true,
    },
    uuid: {
        type: String,
        unique: true,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true,
    }
});

// create a model out of this schema
const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;