const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const { mapUserModelToResponse, mapRequestToUserModel } = require("../../mapper/authUser/user.mapper");
const User = require("../../models/userModel/user.model");
const saltRounds = 10;


const registerRepository=async (req,res)=>{
     try {
        const userData = mapRequestToUserModel(req);
        bcrypt.hash(userData.password, saltRounds, async (err, hash) => {
            if (err) {
                return res.status(500).send(err.message);
            } else {
                const newUser = new User({
                    id: uuidv4(),
                    userName: userData.userName,
                    password: hash,
                    roleName: userData.roleName ?? "member"
                });
                try {
                    const savedUser = await newUser.save();
                    res.send({
                        message: "User is created successfully",
                        data: mapUserModelToResponse(savedUser)
                    });
                } catch (saveError) {
                    res.status(500).send(saveError.message);
                }
            }
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
}
module.exports= {registerRepository};