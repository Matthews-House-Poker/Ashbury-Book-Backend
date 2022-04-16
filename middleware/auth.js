const sha512 = require("../utils/sha512");

const JWTModel = require("../models/jwt");

const getUserObject = require("../utils/getUserObject");

const verifyToken = async (req, res, next) => {
    const token = req.get("authorization");

    if (!token) {
        return res.status(403).json({
            success: false,
            message: "A token is required for authentication",
        });
    }

    const hashedJWT = await sha512(token, process.env.MASTER_JWT_HASHING_SALT);

    const tokenDocument = await JWTModel.findOne({ token: hashedJWT });

    const userObject = await getUserObject(tokenDocument.user);

    if (!userObject) {
        return res.status(500).json({
            success: false,
            message: "Unable to retrieve user data",
        });
    }

    req.user = userObject;

    next();
};

module.exports = verifyToken;
