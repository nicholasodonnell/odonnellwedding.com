const logger = require('../lib/logger')

module.exports = (ctx, next) => {
  const { requestId } = ctx.state

  ctx.logger = new Proxy(logger, {
    get (obj, prop) {
      return (msg, args = {}) => {
        obj[prop](msg, { requestId, ...args })
      }
    },
  })

  return next()
}
