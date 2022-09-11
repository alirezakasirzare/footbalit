const BaseValidator = require('./_base.validator');
const { allPermissions, roles } = require('../config/roles.config');

class AdminValidator extends BaseValidator {
  /**
   * Validation change role request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  changeRole = (req, res, next) => {
    const rules = {
      role: { type: 'enum', values: roles },
      user_email: { type: 'email', max: 300 },
    };

    this.checkValidation(req, res, next, rules);
  };

  /**
   * Validation change permissions request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  changePermissions = (req, res, next) => {
    const rules = {
      permissions: { type: 'array', items: 'string', enum: allPermissions },
      user_email: { type: 'email', max: 300 },
    };

    this.checkValidation(req, res, next, rules);
  };
}

const adminValidator = new AdminValidator();
module.exports = adminValidator;
