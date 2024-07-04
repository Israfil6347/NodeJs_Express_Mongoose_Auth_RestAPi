const { mapUserModelToResponse } = require("../../mapper/authUser/user.mapper");
const User = require("../../models/userModel/user.model");


const userProfileShow = async(req,res)=>{
    const user = await User.findOne({ _id: req.user.id });


    return res.status(200).send({
        status: true,
        data: mapUserModelToResponse(user),
        message: "User found",
    });
}

module.exports = {userProfileShow}