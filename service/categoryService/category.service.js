const { mapCategoryModelToResponse, mapRequestToCategoryModel } = require("../../mapper/category/category.mapper");
const Category = require("../../models/categoryModel/category.model");
const validateCategory = require("../../validation/category/category.validation");

const getCategoryService = async(req,res)=>{
    const categories = await Category.find();

        const response = categories.map(mapCategoryModelToResponse);

        res.status(200).json(response);
}

const postCategoryService = async(req, res)=>{
     const categoryData = mapRequestToCategoryModel(req.body);

        const { error } = validateCategory(categoryData);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const existingCategory = await Category.findOne({ categoryName: categoryData.categoryName });

        if (existingCategory) {
            return res.status(400).json({ message: 'Your Category already exists' });
        } else {
            const categoryCount = await Category.countDocuments();
            const newCategory = new Category({
                categoryId: categoryCount + 1,
                categoryName: categoryData.categoryName
            });
            await newCategory.save();
            res.status(201).json(mapCategoryModelToResponse(newCategory));
        }
}

module.exports={getCategoryService,postCategoryService};