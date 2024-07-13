const { postColorController, getColorController } = require("../../controller/colorController/colorController");

const router = require("express").Router();

router.post("/",postColorController);

router.get("/",getColorController);

module.exports = router;