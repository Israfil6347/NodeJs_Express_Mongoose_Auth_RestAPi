const Joi = require('joi');

const productSchema = Joi.object({
    productId: Joi.number().min(1).max(30),
    productName: Joi.string().required(),
    productPrice: Joi.string().required(),
    headingImage: Joi.string(),
    productQty: Joi.string().required(),
    productDescription: Joi.string().required(),
    categoriesId: Joi.string().required(),
    productStatus: Joi.string().required(),
    productColor: Joi.string().required(),
    otherImage: Joi.string(),
    createUser: Joi.string()
});

const validateProduct = (product) => {
    return productSchema.validate(product);
};

module.exports =validateProduct;