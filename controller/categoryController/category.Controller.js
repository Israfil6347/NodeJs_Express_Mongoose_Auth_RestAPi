const { mapCategoryModelToResponse, mapRequestToCategoryModel } = require("../../mapper/category/category.mapper");
const Category= require("../../models/categoryModel/category.model");
const { getCategoryService, postCategoryService } = require("../../service/categoryService/category.service");

const validateCategory = require("../../validation/category/category.validation");

const getAllCategory = (req, res) => {
    try {
        getCategoryService(req, res)
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const postCategory = async (req, res) => {
    try {
       postCategoryService(req, res)

    } catch (error) {
        res.status(500).send(error.message);
    }
};
module.exports= {getAllCategory, postCategory}