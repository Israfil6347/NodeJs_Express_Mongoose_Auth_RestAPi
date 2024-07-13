const Joi = require('joi');

const statusSchema = Joi.object({
 
    statusCode: Joi.number(),
    statusName: Joi.string().required(),
    
});

const validateStatus = (data) => {
    return statusSchema.validate(data);
};

module.exports =validateStatus;