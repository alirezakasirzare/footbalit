const { validatorFeilds } = require('../config/validator.config');
const BaseValidator = require('./_base.validator');

class LeagueValidator extends BaseValidator {
  /**
   * Validation create one league request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  create = (req, res, next) => {
    const itemValidation = { type: 'string', max: 100 };
    const rules = {
      persian_name: itemValidation,
      english_name: itemValidation,
      country: itemValidation,
    };

    this.checkValidation(req, res, next, rules);
  };

  /**
   * Validation update one league request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  update = (req, res, next) => {
    const itemValidation = { type: 'string', max: 100, optional: true };
    const rules = {
      persian_name: itemValidation,
      english_name: itemValidation,
      country: itemValidation,
    };

    this.checkValidation(req, res, next, rules);
  };
}

const leagueValidator = new LeagueValidator();
module.exports = leagueValidator;
