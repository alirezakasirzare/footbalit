const BaseValidator = require('./_base.validator');

class TeamValidator extends BaseValidator {
  /**
   * Validation create one team request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  create = (req, res, next) => {
    const rules = {
      persian_name: { type: 'string', max: 100 },
      english_name: { type: 'string', max: 100 },
      league: { type: 'objectID' },
    };

    this.checkValidation(req, res, next, rules);
  };

  /**
   * Validation update one team request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  update = (req, res, next) => {
    const rules = {
      persian_name: { type: 'string', max: 100, optional: true },
      english_name: { type: 'string', max: 100, optional: true },
      league: { type: 'objectID', optional: true },
    };

    this.checkValidation(req, res, next, rules);
  };
}

const teamValidator = new TeamValidator();
module.exports = teamValidator;
