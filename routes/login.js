const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sha512 = require("../utils/sha512");
const UserModel = require("../models/user");

const JWTModel = require("../models/jwt");

const login = async (req, res) => {
    const { username, password } = req.body;

    if (!(username, password)) {
        res.status(400).json({
            success: false,
            message: "All inputs are required",
        });
        return;
    }

    const user = await UserModel.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ username: username }, process.env.TOKEN_KEY, {
            expiresIn: "5h",
        });

        await JWTModel.create({
            token: await sha512(token, process.env.MASTER_JWT_HASHING_SALT),
            timestamp: new Date(),
            user: user.uuid,
        });

        return res.status(200).json({ success: true, data: token });
    }
    return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
}

module.exports = login;
