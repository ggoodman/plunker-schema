var Joi = require('joi');

module.exports = Joi.string().regex(/^[a-f0-9]{40}$/);