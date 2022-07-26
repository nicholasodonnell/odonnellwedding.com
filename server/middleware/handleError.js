const createError = require('http-errors')

const {
  httpError,
  unexpectedError,
  validationError,
} = require('../lib/parseErrors')

module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    if (err.isJoi) {
      ctx.logger.error('Joi validation error')
      ctx.body = validationError(err)

      return ctx.status = 400
    }

    if (createError.isHttpError(err)) {
      ctx.logger.error(`HTTP error - ${err.message}`)
      ctx.body = httpError(err)

      return ctx.status = err.status
    }

    ctx.logger.error(`An unexpected error occurred - ${err.stack}`)
    ctx.body = unexpectedError(err)

    return ctx.status = 500
  }
}
