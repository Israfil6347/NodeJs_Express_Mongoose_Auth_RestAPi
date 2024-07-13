const { authorize } = require("../../middleware/authorize");
const ensureAuthenticate = require("../../middleware/auth.middleware");
const { postProductController, getProductController } = require("../../controller/productController/product.controller");

const router = require("express").Router();

router.post("/", ensureAuthenticate,authorize(["admin"]),postProductController);

router.get("/",getProductController);

module.exports = router;