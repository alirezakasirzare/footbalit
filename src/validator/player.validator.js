const BaseValidator = require('./_base.validator');

class PlayerValidator extends BaseValidator {
  /**
   * Validation create one player request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  create = (req, res, next) => {
    const rules = {
      name: { type: 'string', empty: false, max: 100 },
      team: { type: 'objectID' },
    };

    this.checkValidation(req, res, next, rules);
  };

  /**
   * Validation update one player request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  update = (req, res, next) => {
    const rules = {
      name: { type: 'string', empty: false, max: 100, optional: true },
      team: { type: 'objectID', optional: true },
    };

    this.checkValidation(req, res, next, rules);
  };
}

const playerValidator = new PlayerValidator();
module.exports = playerValidator;
