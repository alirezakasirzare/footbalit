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
    if (!data) {
      const error = {
        _message: 'یافت نشد',
      };
      const response = errorResponse(error);
      return res.status(404).json(response);
    }

    const response = successResponse(data);
    res.status(code).json(response);
  };
}

module.exports = BaseController;
