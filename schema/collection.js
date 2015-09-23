var Joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string().regex(/[a-z0-9][-.+_a-z0-9]{1,38}[a-z0-9]/i).required(),
    description: Joi.string().required().min(2).max(4096),
    secret: Joi.boolean().optional().default(true), // Will this appear in search listings
    'private': Joi.boolean().optional().default(false), // Do you need to be a member to have access
    restrict_contribution: Joi.boolean().optional().default(true),
    only_own_plunks: Joi.boolean().optional().default(true),
});