const Joi = require('joi');

const categorySchema = Joi.object({
    categoryId: Joi.number(),
    categoryName: Joi.string().required(),
});

const validateCategory = (category) => {
    return categorySchema.validate(category);
};

module.exports =validateCategory;