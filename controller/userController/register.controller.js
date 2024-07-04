
const { registerService } = require("../../service/userService/register.service");
const validateUser = require("../../validation/userValidation/user.validation");


const registerController= async (req,res)=>{
     try {
        const { error } = validateUser(req.body);

            if (error) {
                return res.status(400).json({ message: error.details[0].message });
            } else {
                registerService(req, res);
            }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports ={registerController}