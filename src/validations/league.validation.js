const BaseValidator = require('./_base.validator');

class LeagueValidation extends BaseValidator {
  create = (req, res, next) => {
    const rules = {
      persian_name: 'string|max:100',
      english_name: 'string|max:100',
      country: 'string|max:100',
    };

    this.checkValidation(req, res, next, rules);
  };

  update = (req, res, next) => {
    const rules = {
      persian_name: 'string|max:100|optional',
      english_name: 'string|max:100|optional',
      country: 'string|max:100|optional',
    };

    this.checkValidation(req, res, next, rules);
  };
}

const leagueValidation = new LeagueValidation();
module.exports = leagueValidation;
