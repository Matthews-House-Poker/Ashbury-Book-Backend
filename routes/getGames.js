const GameModel = require("../models/game");

const getGames = async (req, res) => {
    const allGames = await GameModel.find({}).select("-_id -__v");

    res.status(201).json({
        success: true,
        message: "Games retrieved successfully",
        data: allGames,
    });
};

module.exports = getGames;
