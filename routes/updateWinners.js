const UserModel = require("../models/user");

const updateWinners = async (req, res) => {
    const { first, second, firstValue, secondValue, users, buyin, date } = req.body;

    if (!(first && second && firstValue && secondValue)) {
        res.status(400).json({
            success: false,
            message: "All input is required",
        });
        return;
    }

    UserModel.findOneAndUpdate(
        { username: first },
        { $inc: { score: 2, firsts: 1, earnings: firstValue, gamesPlayed: 1 } },
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
            }
        }
    );

    UserModel.findOneAndUpdate(
        { username: second },
        {
            $inc: {
                score: 1,
                seconds: 1,
                earnings: secondValue,
                gamesPlayed: 1,
            },
        },
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
            }
        }
    );
    for (var i = 0; i < users.length; i++) {

        if (users[i] === first || users[i] === second){
            continue;
        }

        UserModel.findOneAndUpdate(
            { username: users[i] },
            { $inc: { earnings: -1 * buyin, gamesPlayed: 1 } },
            function (error, success) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(success);
                }
            }
        );


        UserModel.findOneAndUpdate(
            { username: users[i] },
            { $push: { debts: {receiver: first, amount: parseInt(buyin), date: date} } },
            function (error, success) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(success);
                }
            }
        );
    }

    res.status(201).json({ success: true, message: "Updated values" });
}

module.exports = updateWinners;