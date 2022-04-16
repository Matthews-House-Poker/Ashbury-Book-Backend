const GameModel = require("../models/game");

const completeGame = async (req, res) => {
    const { day, month } = req.body;
    
    GameModel.findOneAndUpdate(
        { day: day, month: month },
        { $set: { status: "complete" } },
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
            }
        }
    );
    res.status(201).json({ success: true, message: "Updated game status" });
}

module.exports = completeGame;