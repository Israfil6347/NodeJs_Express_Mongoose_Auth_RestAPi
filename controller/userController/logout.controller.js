const { LogoutService } = require("../../service/userService/logout.service")

const LogoutController =(req, res)=>{
    LogoutService(req, res)
}

module.exports = {LogoutController}