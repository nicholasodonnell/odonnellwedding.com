const chalk = require('chalk')
const { complement, compose, isEmpty, join, map, toPairs } = require('ramda')

const isNotEmpty = complement(isEmpty)

const logArg = ([ key, value ]) =>
  `${key}=${JSON.stringify(value)}`

const logArgs = compose(join(', '), map(logArg), toPairs)

const parseArgs = args =>
  isNotEmpty(args) ? ` [${logArgs(args)}]` : ''

const log = chlk => (msg, args = {}) => {
  console.log(chlk(msg + parseArgs(args)))
}

const logger = {
  debug: log(chalk.dim),
  error: log(chalk.red),
  info: log(chalk.white),
  success: log(chalk.green),
  warn: log(chalk.yellow),
}

module.exports = logger
