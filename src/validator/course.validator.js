const BaseValidator = require('./_base.validator');

class CourseValidator extends BaseValidator {
  /**
   * Validation create one course request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  create = (req, res, next) => {
    const rules = {
      name: { type: 'string', max: 100 },
      number: { type: 'number', max: 100 },
    };

    this.checkValidation(req, res, next, rules);
  };

  /**
   * Validation update one course request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  update = (req, res, next) => {
    const rules = {
      name: { type: 'string', max: 100, optional: true },
      number: { type: 'number', max: 100, optional: true },
    };

    this.checkValidation(req, res, next, rules);
  };
}

const courseValidator = new CourseValidator();
module.exports = courseValidator;
