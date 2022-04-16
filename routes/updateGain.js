const UserModel = require("../models/user");


const updateGain = async (req, res) => {
    const { username, index, amount, date, sender } = req.body;
    
    // update the gain status to received
    UserModel.findOneAndUpdate(
        { username: username },
        { $set: { [`gains.${index}.received`]: true } },
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
            }
        }
    );
    // need to remove the debt from the other player
    UserModel.findOneAndUpdate(
        { username: sender},
        { $pull: { debts: { receiver: username, amount: amount, date: date } } },
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

module.exports = updateGain;