const validatorService = require('../services/fastestValidator.service');
const { pick, transform } = require('lodash');
const { validatorLabels } = require('../config/validator.config');

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
      return res.json(this.keyValueError(validationErsult));
    }

    req.body = pick(body, Object.keys(rules));
    next();
  };
}

module.exports = BaseValidator;
