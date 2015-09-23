var Joi = require('joi');

module.exports = Joi.string().token().min(3).max(30);