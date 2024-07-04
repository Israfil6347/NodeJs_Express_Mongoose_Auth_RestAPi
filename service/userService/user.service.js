const { userProfileShow } = require("../../repository/userRepository/userProfileShow.repository");

const userProfileService =(req, res)=>{
    userProfileShow(req, res)
}

module.exports = {userProfileService};