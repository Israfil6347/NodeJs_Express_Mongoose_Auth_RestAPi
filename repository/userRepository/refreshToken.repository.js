const jwt = require('jsonwebtoken');
const userRefreshTokenModel = require("../../models/userModel/userRefreshToken.model");

const refreshTokenRepository = async(req, res,userRefreshToken,decodeRefreshToken)=>{

    await userRefreshTokenModel.deleteOne({_id:userRefreshToken.userId})
    

    const payload = {
        id: decodeRefreshToken.id,
        userName: decodeRefreshToken.userName,
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, { subject: "Access Api",expiresIn: process.env.accessTokenExpire });

    const newRefreshToken = jwt.sign({id: decodeRefreshToken.id},process.env.refreshTokanSECRETKEY, {subject: "Access Api",expiresIn: process.env.refreshTokenExpire})

    await userRefreshToken.save({
        refreshToken:newRefreshToken,
        userId : decodeRefreshToken.id
    })

    return res.status(200).send({
        token: token,
        refreshToken:newRefreshToken
    });

}

module.exports= {refreshTokenRepository};