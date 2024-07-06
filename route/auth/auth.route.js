const { loginController } = require("../../controller/userController/login.controller");
const { registerController } = require("../../controller/userController/register.controller");
const router = require("express").Router();
const jwt = require('jsonwebtoken');
const userRefreshTokenModel= require("../../models/userModel/userRefreshToken.model")
const userInvalidTokenModel= require("../../models/userModel/userInvalidToken.model");
const ensureAuthenticate = require("../../middleware/auth.middleware");
const { LogoutController } = require("../../controller/userController/logout.controller");
const { RefreshToken } = require("../../controller/userController/refreshToken.controller");


router.post("/register", registerController);
router.post("/login", loginController);

router.get("/logout", ensureAuthenticate,LogoutController)
router.post("/refresh-token",RefreshToken );


module.exports = router;