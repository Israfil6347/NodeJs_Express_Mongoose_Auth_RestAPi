const {getStatusController, postStatusController}  = require("../../controller/status/status.Controller");


const router = require("express").Router();

router.get("/", getStatusController);
router.post("/", postStatusController);

module.exports = router;