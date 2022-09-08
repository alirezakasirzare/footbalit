const validatorService = require('../services/validator.service');
const { pick, transform } = require('lodash');
const { validatorLabels } = require('../config/validator.config');
const { errorResponse } = require('../utils/structureResponse.helper');

class BaseValidator {
  /**
   * Transform error object to new error object with more data
   *
   * @param {Object} error - error object
   * @returns {Object} - error object with more data
   */
  keyValueError = (error) => {
    const transformer = (result, item) => {
      result[item.field] = item.message;
    };
    const customError = transform(error, transformer, {});
    return customError;
  };

  /**
   * Transform rules object to new rules object with labels for every parammeter
   *
   * @param {Object} rules - rules of the body request
   * @returns {Object} - rules object with labels
   */
  addLabelToRules = (rules) => {
    const transformer = (result, value, key) => {
      const labeldValue = { ...value, label: validatorLabels[key] };
      result[key] = labeldValue;
    };
    const labeledRules = transform(rules, transformer, {});
    return labeledRules;
  };

  /**
   * Send error response if validation failed, Delete added parametters body if was valid
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   * @param {Object} rules - rules of the body request
   */
  checkValidation = (req, res, next, rules) => {
    const body = req.body;
    const labeldRules = this.addLabelToRules(rules);
    const validationResult = validatorService.validate(body, labeldRules);

    if (validationResult !== true) {
      const keyValueObject = this.keyValueError(validationResult);
      return this.sendError(res, keyValueObject);
    }

    req.body = pick(body, Object.keys(rules));
    next();
  };

  /**
   * Send response with error style
   *
   * @param {object} res - express response
   * @param {object} error - error object
   */
  sendError = (res, error) => {
    const response = errorResponse(error);
    res.status(400).json(response);
  };
}

module.exports = BaseValidator;
