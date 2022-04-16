const mongoose = require("mongoose");

const DebtSchema = new mongoose.Schema({
    receiver: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: false
    }
})

const DebtModel = mongoose.model("debts", DebtSchema);
module.exports = DebtModel;