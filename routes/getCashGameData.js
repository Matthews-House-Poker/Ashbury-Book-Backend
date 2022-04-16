const CashGameModel = require("../models/cashGame");

const getCashGameData = async (req, res) => {
    // get param
    const gameTitle = req.params.gameTitle;

    // get game data
    const game = await CashGameModel.findOne({ title: gameTitle })
        .select("-_id -__v");

    // check if game exists
    if (!game) {
        res.status(404).json({
            success: false,
            message: "Game not found",
        });
        return;
    }

    // return game data
    res.status(201).json({
        success: true,
        message: "Game data retrieved",
        data: game,
    });

}

module.exports = getCashGameData;