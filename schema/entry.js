var Joi = require('joi');

module.exports = Joi.alternatives().try(Joi.object({
    type: Joi.string().required().allow("directory"),
    path: Joi.string().required().regex(/^\/?(?:\.[a-zA-Z0-9]|[a-zA-Z0-9])[\w-]*(?:\.[\w-]+)*(?:\/[a-zA-Z0-9][\w-]*(?:\.[\w-]+)*)*$/)
}), Joi.object({
    type: Joi.string().required().allow("file"),
    path: Joi.string().required().regex(/^\/?(?:\.[a-zA-Z0-9]|[a-zA-Z0-9])[\w-]*(?:\.[\w-]+)*(?:\/[a-zA-Z0-9][\w-]*(?:\.[\w-]+)*)*$/),
    content: Joi.string().required().allow(""),
    encoding: Joi.string().optional().allow("utf8", "base64").default("utf8")
}));