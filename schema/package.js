var Joi = require('joi');
var UrlRegex = require('url-regex');


module.exports = Joi.object().keys({
    name: require('./packageNAme').required(),
    description: Joi.string().allow('').required(),
    website_url: Joi.string().regex(UrlRegex({
        exact: true
    })),
    documentation_url: Joi.string().regex(UrlRegex({
        exact: true
    })),
    keywords: Joi.array().includes(Joi.string().token()),
});
