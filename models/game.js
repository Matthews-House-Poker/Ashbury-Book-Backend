const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    players: {
        type: Array,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    buyin: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }

});

// create a model out of this schema
const GameModel = mongoose.model("game", gameSchema);
module.exports = GameModel;