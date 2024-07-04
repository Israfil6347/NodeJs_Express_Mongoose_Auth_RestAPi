const { userProfileService } = require("../../service/userService/user.service");


const profileController = async (req, res) => {
    try {
        userProfileService(req, res)
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { profileController };


