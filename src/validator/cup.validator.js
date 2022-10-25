const BaseValidator = require('./_base.validator');

class CupValidator extends BaseValidator {
  /**
   * Validation create one cup request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  create = (req, res, next) => {
    const rules = {
      persian_name: { type: 'string', empty: false, max: 100 },
      english_name: { type: 'string', empty: false, max: 100 },
    };

    this.checkValidation(req, res, next, rules);
  };

  /**
   * Validation update one cup request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  update = (req, res, next) => {
    const rules = {
      persian_name: { type: 'string', empty: false, max: 100, optional: true },
      english_name: { type: 'string', empty: false, max: 100, optional: true },
    };

    this.checkValidation(req, res, next, rules);
  };
}

const cupValidator = new CupValidator();
module.exports = cupValidator;
