
const User = require("../../models/userModel/user.model");
const { registerRepository } = require("../../repository/userRepository/Register.repository");


const registerService = async(req,res)=>{

    try {
         const existingUser = await User.findOne({ username: req.body.username });
        
         if (existingUser) {
            return res.status(201).send("user already created");
        }else{
            registerRepository(req,res)

        }
    } catch (error) {
         return res.status(500).send(error.message);
    }
}

module.exports = {registerService};