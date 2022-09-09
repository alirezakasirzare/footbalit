const {
  errorResponse,
  successResponse,
} = require('../utils/structureResponse.helper');

class BaseController {
  /**
   * Send not found error response if data is null, send success response if data exist
   *
   * @param {Object} res - express response
   * @param {Object} data - main data of the proccess
   * @param {number} code - status codes
   */
  sendResponse = (res, data, code = 200) => {
    if (code >= 200 && code < 299) {
      if (!data) {
        const error = {
          _message: 'یافت نشد',
        };
        const response = errorResponse(error);
        return res.status(404).json(response);
      }

      const response = successResponse(data);
      return res.status(code).json(response);
    }

    const response = errorResponse(data);
    return res.status(code).json(response);
  };

  /**
   * Send response just have message in data
   *
   * @param {Object} res - express response
   * @param {string} msg - response message
   * @param {number} code - status codes
   */
  sendResponseMeg = (res, msg, code = 200) => {
    const data = {
      _message: msg,
    };

    if (code <= 200 && code < 299) {
      const response = successResponse(data);
      return res.status(code).json(response);
    }

    const response = errorResponse(data);
    res.status(code).json(response);
  };
}

module.exports = BaseController;
