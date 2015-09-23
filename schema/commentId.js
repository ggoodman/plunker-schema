var Joi = require('joi');

module.exports = Joi.string().regex(/^[a-zA-Z0-9]+$/);