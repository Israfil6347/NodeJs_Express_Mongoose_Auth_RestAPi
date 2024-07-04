require("dotenv").config();
const User = require("../../models/userModel/user.model")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const validateUser = require("../../validation/userValidation/user.validation");
const { loginService } = require("../../service/userService/login.Service");
const loginController = async(req,res)=>{
     try {
        const { error } = validateUser(req.body);
         if (error) {
                return res.status(400).json({ message: error.details[0].message });
            } else {
                loginService(req, res);
            }
        
    } catch (error) {
        res.status(500).send(error.message);
    }
}
module.exports= {loginController}