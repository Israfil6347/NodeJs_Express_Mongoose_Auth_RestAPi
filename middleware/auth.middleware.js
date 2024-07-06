require("dotenv").config();
const jwt = require('jsonwebtoken');
const userInvalidToken = require("../models/userModel/userInvalidToken.model")

const ensureAuthenticate = async(req,res,next)=>{
    const AccessToken = req.headers.authorization; 

    if(!AccessToken){
        return res.status(401).send({
            status: false,
            message: "Access token not found"
        });
    }
    
    if(await userInvalidToken.findOne({AccessToken: req.headers.authorization})){
        return res.status(401).send({
                status: false,
                message: "Access token invalid or expired"
            });
    }
    
    console.log(AccessToken);

        try {
            const decodeAccessToken =  jwt.verify(AccessToken, process.env.SECRET_KEY)
            req.AccessToken = { value: AccessToken, exp: decodeAccessToken.exp };
            req.user = {id: decodeAccessToken.id}
            next()
        
        } catch (error) {

            return res.status(401).send({
                status: false,
                message: "Access token invalid or expired"
            });
        }

    
}

module.exports= ensureAuthenticate;