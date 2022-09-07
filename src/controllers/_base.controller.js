const {
  errorResponse,
  successResponse,
} = require('../utils/structureResponse.helper');

class BaseController {
  sendResponse = (res, { data, code, message, expect }) => {
    if (!data) {
      const error = {
        _message: message || `${expect} یافت نشد`,
      };
      const response = errorResponse(error);
      const codeRes = code || 404;
      return res.status(codeRes).json(response);
    }

    const response = successResponse(data);
    const codeRes = code || 200;
    res.status(codeRes).json(response);
  };
}

module.exports = BaseController;
