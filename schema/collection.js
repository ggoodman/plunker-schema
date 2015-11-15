var Joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string().required().min(2).max(140),
    description: Joi.string().required().min(2).max(4096),
    secret: Joi.boolean().optional().default(true), // Will this appear in search listings
    'private': Joi.boolean().optional().default(false), // Do you need to be a member to have access
    restrict_contribution: Joi.boolean().optional().default(true),
    only_own_plunks: Joi.boolean().optional().default(true),
});