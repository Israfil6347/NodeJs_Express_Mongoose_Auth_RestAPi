const { mapRequestToUserModel } = require("../../mapper/authUser/user.mapper");
const User = require("../../models/userModel/user.model");
const { loginRepository } = require("../../repository/userRepository/login.repository");

const loginService=async(req,res)=>{
    try {
        const requestData = mapRequestToUserModel(req);
        const UserFound = await User.findOne({ userName: requestData.userName });
         if (UserFound) {
             loginRepository(req,res,UserFound)
         }else {
            return res.status(401).send({
                status: false,
                message: "User not found"
            });
        }
    } catch (error) {
         res.status(500).send(error.message);
    }

}

module.exports={loginService};