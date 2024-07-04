const router = require("express").Router();

const { profileController } = require("../controller/userController/user.controller");

router.get("/", profileController);

module.exports = router;