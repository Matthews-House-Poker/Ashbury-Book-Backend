const UserModel = require("../models/user");

const getUserObject = async (uuid) => {
    const user = await UserModel.findOne({ uuid }).select("-_id -password -__v");
    return user;
};

module.exports = getUserObject;
