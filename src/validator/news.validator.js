const BaseValidator = require('./_base.validator');

class NewsValidator extends BaseValidator {
  /**
   * Validation create one news request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  create = (req, res, next) => {
    const rules = {
      title: { type: 'string' },
      text: { type: 'string' },
      source: { type: 'string' },
      tags: { type: 'array', items: 'string' },
    };

    this.checkValidation(req, res, next, rules);
  };

  /**
   * Validation update one news request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  update = (req, res, next) => {
    const rules = {
      title: { type: 'string', optional: true },
      text: { type: 'string', optional: true },
      source: { type: 'string', optional: true },
      tags: { type: 'array', items: 'string', optional: true },
    };

    this.checkValidation(req, res, next, rules);
  };
}

const newsValidator = new NewsValidator();
module.exports = newsValidator;
