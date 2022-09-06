const { validatorFeilds } = require('../config/validator.config');
const BaseValidator = require('./_base.validator');

class LeagueValidator extends BaseValidator {
  create = (req, res, next) => {
    const itemValidation = { type: 'string', max: 100 };
    const rules = {
      [validatorFeilds.persian_name]: itemValidation,
      [validatorFeilds.english_name]: itemValidation,
      [validatorFeilds.country]: itemValidation,
    };

    this.checkValidation(req, res, next, rules);
  };

  update = (req, res, next) => {
    const itemValidation = { type: 'string', max: 100, optional: true };

    const rules = {
      persian_name: itemValidation,
      english_name: itemValidation,
      country: itemValidation,
    };

    this.checkValidation(req, res, next, rules);
  };
}

const leagueValidator = new LeagueValidator();
module.exports = leagueValidator;