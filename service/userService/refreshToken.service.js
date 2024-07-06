const jwt = require('jsonwebtoken');
const userRefreshTokenModel = require("../../models/userModel/userRefreshToken.model");
const { refreshTokenRepository } = require('../../repository/userRepository/refreshToken.repository');

const RefreshTokenService = async(req,res)=>{
     try {
        const {refreshToken} =req.body
        if(!refreshToken){
            res.status(401).send({
                status: false,
                message: "Refresh token not found"
            });
        }else{
            const decodeRefreshToken =jwt.verify(refreshToken, process.env.refreshTokanSECRETKEY )
            const userRefreshToken = await userRefreshTokenModel.findOne({refreshToken , userId: decodeRefreshToken.id} )
                       
            if(!userRefreshToken){
                res.status(401).send({
                status: false,
                message: "Refresh token invalid or expired vbgdfg"
            });
            }else{
                refreshTokenRepository(req,res,userRefreshToken,decodeRefreshToken)
            }
        }    
    } catch (error) {

        if(error instanceof jwt.TokenExpiredError || error instanceof jwt.JsonWebTokenError){
            res.status(401).send({
                status: false,
                message: "Refresh token invalid or expired"

            });
        }
        res.status(500).send(error.message);
    }
}

module.exports={RefreshTokenService};