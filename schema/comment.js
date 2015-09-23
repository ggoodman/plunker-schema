var Joi = require('joi');

module.exports = Joi.object().keys({
    body: Joi.string().required().min(2).max(4096),
    attachment: Joi.object().keys({
        entries: require('./entryList').optional(),
        parents: Joi.array().items(Joi.string().alphanum().length(40)),
    }).allow(null).optional()
});