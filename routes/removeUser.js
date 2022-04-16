const GameModel = require("../models/game");

const removeUser =  async (req, res) => {
    const { game_day } = req.body;

    const player = req.user.username;

    GameModel.findOneAndUpdate(
        { day: game_day },
        { $pull: { players: player } },
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
            }
        }
    );
    res.status(201).json({ success: true, message: "Left Game" });
}

module.exports = removeUser;
