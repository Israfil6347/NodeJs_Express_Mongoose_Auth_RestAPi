const { RefreshTokenService } = require("../../service/userService/refreshToken.service")

const RefreshToken = (req,res)=>{
    RefreshTokenService(req,res)
}

module.exports ={RefreshToken}