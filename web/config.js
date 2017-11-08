'use strict'
const Joi = require('joi');
const logger = require('winston');

const envVarSchema = Joi.object().keys({
  PORT: Joi.number()
        .min(0)
        .max(65535)
        .required()
})
.unknown()
.required()

const { error, value:envVars } = Joi.validate(process.env, envVarSchema)

if (error){
  logger.error(`Config validation error: ${error.message}`)
}

const config = {
  port: envVars.PORT
}

module.exports = config
