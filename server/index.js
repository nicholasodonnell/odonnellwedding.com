const http = require('http')
const cors = require('@koa/cors')
const Router = require('@koa/router')
const exit = require('exeunt')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const logger = require('./lib/logger')
const errorContext = require('./middleware/handleError')
const loggerContext = require('./middleware/logger')
const logRequestAndResponse = require('./middleware/logRequestAndResponse')
const requestIdContext = require('./middleware/requestId')

const health = require('./routes/health')

const router = new Router()
router
  .use(cors({
    credentials: true,
  }))
  .use(bodyParser({ enableTypes: [ 'json' ] }))
  .use(requestIdContext)
  .use(loggerContext)
  .use(logRequestAndResponse)
  .use(errorContext)
  .get('/health', health)

const app = new Koa()
app.use(router.routes(), router.allowedMethods())

const server = http.createServer(app.callback())

// Set server timeouts to give minutes.
const FIVE_MINUTES = 1000 * 60 * 5
server.timeout = FIVE_MINUTES
server.keepAliveTimeout = FIVE_MINUTES
server.headersTimeout = FIVE_MINUTES

const port = 8080

if (require.main === module) server.listen(port)

server.on('error', logger.error)
server.on('listening', () => logger.info(`listening on port ${port}`))

process.on('SIGTERM', () => {
  logger.info('gracefully closing server')

  server.close(() => {
    logger.info('server closed')

    exit(0)
  })
})

module.exports = server
