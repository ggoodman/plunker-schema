var Joi = require('joi');

module.exports = Joi.object().keys({
    identities: Joi.array().items(require('./jwt')).required(),
    profile: require('./profile').required(),
});