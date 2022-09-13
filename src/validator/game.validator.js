const BaseValidator = require('./_base.validator');

class GameValidator extends BaseValidator {
  /**
   * Validation create one game request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  create = (req, res, next) => {
    const rules = {
      team_one: { type: 'objectID' },
      team_two: { type: 'objectID' },
      league: { type: 'objectID' },
      course: { type: 'objectID' },
      date: { type: 'date', convert: true },
    };

    this.checkValidation(req, res, next, rules);
  };

  /**
   * Validation update one game request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  update = (req, res, next) => {
    const rules = {
      team_one: { type: 'objectID', optional: true },
      team_two: { type: 'objectID', optional: true },
      league: { type: 'objectID', optional: true },
      course: { type: 'objectID', optional: true },
      status: {
        type: 'enum',
        values: ['ended', 'started', 'not started', 'suspended'],
      },
      date: { type: 'date', convert: true, optional: true },
    };

    this.checkValidation(req, res, next, rules);
  };
}

const gameValidator = new GameValidator();
module.exports = gameValidator;
