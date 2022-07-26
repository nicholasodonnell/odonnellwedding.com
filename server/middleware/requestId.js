const { v4: uuid } = require('uuid')

module.exports = (ctx, next) => {
  ctx.state.requestId = uuid()

  return next()
}
