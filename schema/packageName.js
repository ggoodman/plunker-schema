var Joi = require('joi');

module.exports = Joi.string().regex(require('./packageNameRx'));
