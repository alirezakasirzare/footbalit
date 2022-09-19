const sendEmail = require('../services/email.service');
const {
  errorResponse,
  successResponse,
  paginationRes,
} = require('../utils/structureResponse.helper');

class BaseController {
  /**
   * Send not found error for client
   *
   * @param {Object} res - express response
   */
  sendResponse404 = (res) => {
    const error = {
      _message: 'یافت نشد',
    };
    const response = errorResponse(error);
    return res.status(404).json(response);
  };

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
        return this.sendResponse404(res);
      }

      const response = successResponse(data);
      return res.status(code).json(response);
    }

    const response = errorResponse(data);
    return res.status(code).json(response);
  };

  /**
   * Send pagination response
   *
   * @param {Object} res - express response
   * @param {Object} data - main data of the proccess
   * @param {number} page - count of page we want
   * @param {number} count - count of our recordes
   */
  sendResponsePagination = (res, data, page, count) => {
    const result = paginationRes(data, page, count);
    return this.sendResponse(res, result);
  };

  /**
   * Send response just have message in data
   *
   * @param {Object} res - express response
   * @param {string} msg - response message
   * @param {number} code - status codes
   */
  sendResponseMsg = (res, msg, code = 200) => {
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

  /**
   * Send code verify to email
   *
   * @param {string} to - user email
   * @param {string} code - code verify
   */
  sendCodeEmail = (to, code) => {
    const text = `کد تایید شما: ${code}`;
    const html = `کد تایید شما: <b>${code}</b>`;
    sendEmail(to, text, html);
  };
}

module.exports = BaseController;
