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
    const rules = {
      persian_name: { type: 'string', max: 100 },
      english_name: { type: 'string', max: 100 },
      country: { type: 'string', max: 100 },
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
    const rules = {
      persian_name: { type: 'string', max: 100, optional: true },
      english_name: { type: 'string', max: 100, optional: true },
      country: { type: 'string', max: 100, optional: true },
    };

    this.checkValidation(req, res, next, rules);
  };
}

const leagueValidator = new LeagueValidator();
module.exports = leagueValidator;
