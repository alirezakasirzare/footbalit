const BaseValidator = require('./_base.validator');

class UserValidator extends BaseValidator {
  /**
   * Validation update user data
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  update = (req, res, next) => {
    const rules = {
      first_name: { type: 'string', max: 100, optional: true },
      last_name: { type: 'string', max: 100, optional: true },
    };

    this.checkValidation(req, res, next, rules);
  };
}

const userValidator = new UserValidator();
module.exports = userValidator;
