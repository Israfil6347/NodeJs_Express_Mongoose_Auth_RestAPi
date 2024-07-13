const Joi = require('joi');

const productSchema = Joi.object({
    productId: Joi.number().min(1).max(30),
    productName: Joi.string().required(),
    productQty: Joi.string().required(),
    productDescription: Joi.string().required(),
    productStatus: Joi.string().required(),
    createUser: Joi.string()
});

const validateProduct = (product) => {
    return productSchema.validate(product);
};

module.exports =validateProduct;