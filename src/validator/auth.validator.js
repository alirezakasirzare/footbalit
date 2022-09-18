const BaseValidator = require('./_base.validator');

class AuthValidator extends BaseValidator {
  /**
   * Validation login request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  login = (req, res, next) => {
    const rules = {
      email: { type: 'email', max: 300 },
      password: { type: 'string', max: 100, min: 4 },
    };

    this.checkValidation(req, res, next, rules);
  };

  /**
   * Validation register request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  register = (req, res, next) => {
    const rules = {
      firat_name: { type: 'string', max: 100 },
      last_name: { type: 'string', max: 100, optional: true },
      email: { type: 'email', max: 300 },
      password: { type: 'string', max: 100, min: 4 },
      confrim_password: { type: 'equal', field: 'password' },
    };

    this.checkValidation(req, res, next, rules);
  };

  /**
   * Validation send code for forget password
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  sendCode = (req, res, next) => {
    const rules = {
      email: { type: 'email', max: 300 },
    };

    this.checkValidation(req, res, next, rules);
  };

  /**
   * Validation check code for forget password
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  checkCode = (req, res, next) => {
    const rules = {
      email: { type: 'email', max: 300 },
      code: { type: 'number', length: 5 },
    };

    this.checkValidation(req, res, next, rules);
  };

  /**
   * Validation forget password
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  forgetPassword = (req, res, next) => {
    const rules = {
      email: { type: 'email', max: 300 },
      code: { type: 'number', length: 5 },
      password: { type: 'string', max: 100, min: 4 },
      confrim_password: { type: 'equal', field: 'password' },
    };

    this.checkValidation(req, res, next, rules);
  };
}

const authValidator = new AuthValidator();
module.exports = authValidator;
