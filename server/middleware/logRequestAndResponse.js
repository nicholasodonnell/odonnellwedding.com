module.exports = async (ctx, next) => {
  ctx.logger.info(`--> ${ctx.method} ${ctx.originalUrl}`)

  await next()

  ctx.logger.info(`<-- ${ctx.method} ${ctx.originalUrl} ${ctx.status}`)
}
