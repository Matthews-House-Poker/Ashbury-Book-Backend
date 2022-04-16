const CashGameModel = require("../models/cashGame");

const getCashGames = async (req, res) => {
    const allGames = await CashGameModel.find({}).select("-_id -__v");

    res.status(201).json({
        success: true,
        message: "Games retrieved successfully",
        data: allGames,
    });
};

module.exports = getCashGames;
