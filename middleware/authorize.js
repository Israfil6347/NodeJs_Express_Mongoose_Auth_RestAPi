const User = require("../models/userModel/user.model");

const authorize=(role=[])=>{

    return async function (req,res,next){

        const user = await User.findOne({_id: req.user.id})

        if(!user || !role.includes(user.roleName)){
            return res.status(401).send({
            status: false,
            message: "Access is denied"
             });
        }else{
            next();
        }
    }
}

module.exports ={authorize};