const { errorResponse } = require('../utils/structureResponse.helper');
const winston = require('winston');

const handleError = (err, req, res, next) => {
  winston.error(err.message, err);

  const error = {
    _message: 'خطای سمت سرور',
  };
  const response = errorResponse(error);
  return res.status(500).json(response);
};

module.exports = handleError;
