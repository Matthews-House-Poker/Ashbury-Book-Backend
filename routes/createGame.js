const GameModel = require("../models/game");

const createGame = async (req, res) => {
    const { players, month, day, time, buyin, title, senior } = req.body;

    if (!(time && buyin && players && title && day && month)) {
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

    const newGame = new GameModel(req.body);
    await newGame.save();

    res.status(201).json({ success: true, message: "Game created", data: req.body });
}

module.exports = createGame;