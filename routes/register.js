const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");


const register = async (req, res) => {
    const { username, password, key, email } = req.body;

    if (!(username && password && email)) {
        res.status(400).json({
            success: false,
            message: "All input is required",
        });
        return;
    }

    if (key !== process.env.REGISTER_KEY) {
        res.status(400).json({
            success: false,
            message: "Incorrect key",
        });
        return;
    }

    const oldUser = await UserModel.countDocuments({
        $or: [{ username: username }, { email: req.body.email }],
    });

    if (oldUser) {
        return res.status(409).send({
            success: false,
            message: "User Already Exists. Please Login",
        });
    }

    //Encrypt user password
    const encryptedUserPassword = await bcrypt.hash(password, 10);
    await UserModel.create({
        username,
        password: encryptedUserPassword,
        score: 0,
        email,
        firsts: 0,
        seconds: 0,
        earnings: 0,
        gamesPlayed: 0,
        debts: [],
        gains: [],
        senior: false,
        timestamp: new Date(),
        uuid: uuidv4(),
    });

    return res.status(201).json({ success: true, message: "Registered" });
}

module.exports = register;