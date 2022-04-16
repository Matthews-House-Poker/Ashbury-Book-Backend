
const getUserData = async (req, res) => {
    const userObject = req.user;

    res.status(201).json({
        success: true,
        message: "Data fetched",
        data: userObject,
    })

}

module.exports = getUserData;