const { LogoutRepository } = require("../../repository/userRepository/Logout.repository");

const LogoutService = (req,res)=>{

    try {
        LogoutRepository(req,res)
        
    } catch (error) {
        res.status(500).send(error.message);
    }

}
module.exports={LogoutService};