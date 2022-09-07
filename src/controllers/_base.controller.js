const {
  errorResponse,
  successResponse,
} = require('../utils/structureResponse.helper');

class BaseController {
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
