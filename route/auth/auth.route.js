const { loginController } = require("../../controller/userController/login.controller");
const { registerController } = require("../../controller/userController/register.controller");
const router = require("express").Router();
const jwt = require('jsonwebtoken');

const userRefreshTokenModel= require("../../models/userModel/userRefreshToken.model")

const userInvalidTokenModel= require("../../models/userModel/userInvalidToken.model");
const ensureAuthenticate = require("../../middleware/auth.middleware");


router.get("/logout", ensureAuthenticate,async(req, res)=>{

    try {
        await userRefreshTokenModel.deleteMany({userId: req.user.id})

      console.log("reqUserID",)

     
        await userInvalidTokenModel.create({
            accessToken: res.accessToken,
            userId: req.user.id,
            expirationTime: req.accessToken
         })

         return res.status(204).send("Logout successfully")
        
    } catch (error) {
        res.status(500).send(error.message);
    }
})
router.post("/register", registerController);
router.post("/login", loginController);
router.post("/refresh-token", async (req,res)=>{
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
});


module.exports = router;