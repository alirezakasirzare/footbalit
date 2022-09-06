const validatorService = require('../services/validator.service');
const { pick, transform } = require('lodash');
const { validatorLabels } = require('../config/validator.config');
const { errorResponse } = require('../utils/structureResponse.helper');

class BaseValidator {
  keyValueError = (error) => {
    const transformer = (result, item) => {
      result[item.field] = item.message;
    };
    const customError = transform(error, transformer, {});
    return customError;
  };

  addLabelToRules = (rules) => {
    const transformer = (result, value, key) => {
      const labeldValue = { ...value, label: validatorLabels[key] };
      result[key] = labeldValue;
    };
    const labeledRules = transform(rules, transformer, {});

    return labeledRules;
  };

  checkValidation = (req, res, next, rules) => {
    const body = req.body;
    const labeldRules = this.addLabelToRules(rules);
    const validationErsult = validatorService.validate(body, labeldRules);
    if (validationErsult !== true) {
      const keyValueObject = this.keyValueError(validationErsult);
      return this.sendError(res, keyValueObject);
    }

    req.body = pick(body, Object.keys(rules));
    next();
  };

  sendError = (res, error) => {
    const response = errorResponse(error);
    res.status(400).json(response);
  };
}

module.exports = BaseValidator;
