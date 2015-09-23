var Joi = require('joi');
var UrlRegex = require('url-regex');

module.exports = Joi.object().keys({
    username: require('./username').required(),
    email: Joi.string().email().required(),
    description: Joi.string().max(240).allow('').optional(),
    location: Joi.string().max(120).allow('').optional(),
    name: Joi.string().max(120).allow('').optional(),
    picture_url: Joi.string().regex(UrlRegex()).allow('').optional(),
    website_url: Joi.string().regex(UrlRegex()).allow('').optional(),
});