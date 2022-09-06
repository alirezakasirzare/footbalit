const fastestValidationService = require('../services/fastestValidator.service');
const { pick, transform } = require('lodash');

class BaseValidator {
  keyValueError = (error) => {
    const transformer = (result, item) => {
      result[item.field] = item.message;
    };
    const customError = transform(error, transformer, {});
    return customError;
  };

  checkValidation = (req, res, next, rules) => {
    const body = req.body;
    const check = fastestValidationService.compile(rules);
    const validationErsult = check(body);

    if (validationErsult !== true) {
      return res.json(this.keyValueError(validationErsult));
    }

    req.body = pick(body, Object.keys(rules));
    next();
  };
}

module.exports = BaseValidator;
