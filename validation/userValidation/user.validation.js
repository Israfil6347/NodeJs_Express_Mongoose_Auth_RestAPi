const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string().min(3).max(30).email().required(),
    password: Joi.string().required(),
    role: Joi.string()
});

const validateUser = (user) => {
    return userSchema.validate(user);
};

module.exports =validateUser;