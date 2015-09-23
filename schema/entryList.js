var Joi = require('joi');

module.exports = Joi.array().min(1).items(require('./entry'));