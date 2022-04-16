const mongoose = require("mongoose");

const cashGameSchema = new mongoose.Schema({
    players: {
        type: Array,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    minBuyin: {
        type: String,
        required: true
    },
    maxBuyin: {
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
const CashGameModel = mongoose.model("cashGame", cashGameSchema);
module.exports = CashGameModel;
