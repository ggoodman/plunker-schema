var Joi = require('joi');

module.exports = Joi.object().keys({
    title: Joi.string().required().min(2).max(140),
    readme: Joi.string().required().allow('').default(''),
    tags: Joi.array().required().items(Joi.string().regex(/^[-_\.a-zA-Z0-9]+$/)),
    entries: require('./entryList').required(),
});