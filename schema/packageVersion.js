var Joi = require('joi');
var SemverRegex = require('semver-regex');

module.exports = Joi.object().keys({
    semver: Joi.string().regex(SemverRegex()).required(),
    imports: Joi.array().includes(Joi.string()),
    scripts: Joi.array().includes(Joi.string()),
    styles: Joi.array().includes(Joi.string()),
    dependencies: Joi.object().pattern(require('./packageNameRx'), Joi.string())
});