const BaseValidator = require('./_base.validator');

class CommentValidator extends BaseValidator {
  /**
   * Validation create one comment request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  create = (req, res, next) => {
    const rules = {
      text: { type: 'string', empty: false, empty: false },
      news: { type: 'objectID' },
    };

    this.checkValidation(req, res, next, rules);
  };

  /**
   * Validation update one comment request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  update = (req, res, next) => {
    const rules = {
      text: { type: 'string', empty: false, optional: true },
      news: { type: 'objectID', optional: true },
    };

    this.checkValidation(req, res, next, rules);
  };
}

const commentValidator = new CommentValidator();
module.exports = commentValidator;
