const { compose, join, map, prop } = require('ramda')
const { NODE_ENV } = require('./env')

const joinErrors = compose(
  join(' - '),
  map(prop('message')),
)

const getHttpErrorCode = status => {
  switch (status) {
    case 400:
      return 'bad_request'
    case 401:
      return 'unauthorized'
    case 403:
      return 'forbidden'
    case 404:
      return 'not_found'
    case 409:
      return 'conflict'
    case 500:
      return 'internal_server_error'
    default:
      return 'http_error'
  }
}

module.exports.validationError = err => ({
  code: 'validation_error',
  message: joinErrors(err.details),
})

module.exports.unexpectedError = err => ({
  code: 'unexpected_error',
  message: NODE_ENV === 'development' && err.message
    ? err.message
    : 'An unexpected error occurred',
})

module.exports.httpError = err => ({
  code: getHttpErrorCode(err.status),
  message: err.message,
})
