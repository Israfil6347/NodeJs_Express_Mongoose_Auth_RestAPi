const {  getAllCategory, postCategory } = require("../../controller/categoryController/category.Controller");

const router = require("express").Router();


router.get("/", getAllCategory);

router.post("/", postCategory);


module.exports = router;