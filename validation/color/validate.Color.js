const Joi = require('joi');

const colorSchema = Joi.object({
 
    colorCode: Joi.string().required(),
    colorName: Joi.string().required(),
    
});

const validateColor = (color) => {
    return colorSchema.validate(color);
};

module.exports =validateColor;