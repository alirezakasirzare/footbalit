const BaseValidator = require('./_base.validator');

class EventValidator extends BaseValidator {
  /**
   * Validation create one event request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  create = (req, res, next) => {
    const rules = {
      minute: { type: 'number', max: 90 },
      type: {
        type: 'enum',
        values: ['goal', 'change-player', 'card', 'penalty'],
      },
      data: { type: 'object' },
      game: { type: 'objectID' },
      team: { type: 'objectID' },
    };

    this.checkValidation(req, res, next, rules);
  };

  /**
   * Validation update one event request body
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   * @param {Function} next - express next
   */
  update = (req, res, next) => {
    const rules = {
      minute: { type: 'number', max: 90, optional: true },
      type: {
        type: 'enum',
        values: ['goal', 'change-player', 'card', 'penalty'],
        optional: true,
      },
      data: { type: 'object', optional: true },
      game: { type: 'objectID', optional: true },
      team: { type: 'objectID', optional: true },
    };

    this.checkValidation(req, res, next, rules);
  };
}

const eventValidator = new EventValidator();
module.exports = eventValidator;
