const { errorResponse } = require('../utils/structureResponse.helper');
const winston = require('winston');

/**
 * Log error and send server error response to client
 *
 * @param {Object} err - error object
 * @param {Object} req - express request
 * @param {Object} res - express response
 * @param {Function} next - express next
 */
const handleError = (err, req, res, next) => {
  winston.error(err.message, err);
  const error = {
    _message: 'خطای سمت سرور',
  };
  const response = errorResponse(error);
  return res.status(500).json(response);
};

module.exports = handleError;
