const UserModel = require("../models/user");

// get requests or app.posts for post requests
// api requests or endpoints bridge the frontend and the backend
// res sends information from the frontend to the backend
const getUsers = async (req, res) => {
    // logic for when frontend makes a get request to this route
    // request data from the database
    // returns all the data inside the collection
    const allUsers = await UserModel.find({}).select("-_id -__v -password");

    // send the data back to the frontend
    res.status(201).json({
        success: true,
        message: "Users retrieved successfully",
        data: allUsers,
    });
}

module.exports = getUsers;