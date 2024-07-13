const Joi = require('joi');

const colorSchema = Joi.object({
 
    // SKU: Joi.string().required(),
    price: Joi.string().required(),
    Qty: Joi.string().required(),
    price: Joi.string().required(),
    color: Joi.string().required(),
    productImage: Joi.string().required(),
    otherImage: Joi.string().required(),
    productId: Joi.string().required(),
    expireDate: Joi.string().required(),
    
});

const validateSKU = (color) => {
    return colorSchema.validate(color);
};

module.exports =validateSKU;