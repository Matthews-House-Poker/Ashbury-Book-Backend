const CashGameModel = require("../models/cashGame");

const createCashGame = async (req, res) => {
    const { players, month, day, time, minBuyin, maxBuyin, title, senior } = req.body;

    if (!(time && minBuyin && maxBuyin && players && title && day && month)) {
        res.json({
            success: false,
            message: "All input is required",
        });
        return;
    }

    if (!senior){
        res.json({
            success: false,
            message: "Invalid permissions",
        });
        return;
    }

    const newGame = new CashGameModel(req.body);
    await newGame.save();

    res.status(201).json({ success: true, message: "Game created", data: req.body });
}

module.exports = createCashGame;