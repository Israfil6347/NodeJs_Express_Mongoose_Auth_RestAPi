const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const userRefreshToken = require("../../models/userModel/userRefreshToken.model")


const loginRepository =async(req,res, UserFound)=>{
           
    if (bcrypt.compareSync(req.body.password, UserFound.password)) {
        const payload = {
            id: UserFound._id,
            userName: UserFound.userName,
        };

      

        const token = jwt.sign(payload, process.env.SECRET_KEY, { subject: "Access Api",expiresIn: process.env.accessTokenExpire });
       
       const refreshToken = jwt.sign(payload,process.env.refreshTokanSECRETKEY, {subject: "Access Api",expiresIn: process.env.refreshTokenExpire})

        await userRefreshToken.create({
                refreshToken,
                userId: UserFound._id,
            });
            
        return res.status(200).send({
            status: true,
            message: "User login successfully",
            token: token,
            refreshToken,
        });
    } else {
        return res.status(401).send({
            status: false,
            message: "User password does not match"
        });
    }
}

module.exports ={loginRepository}