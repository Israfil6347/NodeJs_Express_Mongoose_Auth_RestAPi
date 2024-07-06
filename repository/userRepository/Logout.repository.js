const userRefreshTokenModel = require("../../models/userModel/userRefreshToken.model")
const userInvalidTokenModel = require("../../models/userModel/userInvalidToken.model")

const LogoutRepository = async(req,res)=>{


    await userRefreshTokenModel.deleteMany({userId: req.user.id})

    
        await userInvalidTokenModel.create({
            AccessToken: req.AccessToken.value,
            userId: req.user.id,
            expirationTime: req.AccessToken.exp
         })

         return res.status(204).send();
}

module.exports= {LogoutRepository};