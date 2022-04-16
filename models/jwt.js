// each file represents a collection in our database
const mongoose = require('mongoose');

const JWTSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
    timestamp: {
        type: Date,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
});

// create a model out of this schema
module.exports = mongoose.model("jwts", JWTSchema);
