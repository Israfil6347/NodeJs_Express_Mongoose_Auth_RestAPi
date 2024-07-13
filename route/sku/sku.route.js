const { getSkuController, postSkuController } = require("../../controller/sku/sku.controller");

const router = require("express").Router();

router.get("/", getSkuController);
router.post("/", postSkuController);

module.exports = router;