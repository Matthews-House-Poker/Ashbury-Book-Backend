const GameModel = require("../models/game");

const amIJoined = async (req, res) => {
    const username = req.user.username;

    const gameTitle = req.params.gameTitle;

    const game = await GameModel.findOne({ title: gameTitle });

    if (!game) {
        res.status(404).json({
            success: false,
            message: "Game not found",
        });
        return;
    }

    const isJoined = game.players.includes(username);

    res.status(201).json({
        success: true,
        message: isJoined ? "You are joined" : "You are not joined",
        data: isJoined, // true or false
    });
};

module.exports = amIJoined;
